import os, sys, json, re, glob, time, argparse, csv
from http.server import BaseHTTPRequestHandler, HTTPServer
import importlib
from urllib import parse
from urllib.parse import urlparse
from urllib.parse import parse_qs
from serverResult import ServerResult
from socketserver import ThreadingMixIn
import threading

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""

sys.path.append(os.getcwd() + "/v1")

_modules = glob.glob('v1/*.py', recursive=True)
_modreg = re.compile("([A_Za-z_][A-Za-z0-9]*).py")

MODULES = {}

for _oneModule in _modules:
	_modName = _modreg.search( _oneModule )
	if _modName:
		module_name = _modName.group(1)
		print("Loading: " + _oneModule + " as " + module_name, flush=True)
		MODULES[module_name] = importlib.import_module(module_name)

def parseUrl(path):
	try:
		parts = urlparse(path)

		pathArray = []
		for one in parts.path.split('/'):
			if len(one):
				pathArray.append(one)

		qryObject = parse_qs(parts.query)
		qryParams = {}
		for key in qryObject:
			qryParams[key] = qryObject[key][0]

	except Exception as err:
		return None

	return { "path": pathArray, "params":qryParams }

class RequestHandler(BaseHTTPRequestHandler):

	def do_POST(self):
		self._emit("POST: " + self.path)
		try:
			data = self.rfile.read(int(self.headers["Content-Length"]))
			sData = str(data, 'utf-8')
			print("Read data len: " + str(len(sData)))
			try:
				#data = json.loads(sData)
				#data = csv.DictReader(sData)
				tmp = 1 # place holder
			except Exception as ex:
				self._error(400, str(ex))
				return

			urlParts = parseUrl(self.path)
			if len(urlParts["path"]) < 3 or urlParts["path"][0] != "v1":
				self._error(404, "Bad path")
			else:
				moduleName = urlParts["path"][1]
				if not moduleName in MODULES:
					self._error(404, moduleName)
				else:
					try:
						module_ = MODULES[moduleName]
						class_ = getattr(module_, urlParts["path"][2])
						instance = class_()
					except Exception:
						self._error(404, "Not found")
						return

					try:
						result = instance.post(self, urlParts["path"][3:], urlParts["params"], sData)
					except Exception as ex:
						self._error(500, str(ex))
						return

					if not result:
						self._success()
					else:
						self._success(result.code, result.data)
		except Exception as ex:
			self._error(500, str(ex))

	def do_GET(self):
		self._emit("GET: " + self.path)
		urlParts = parseUrl(self.path)
		if len(urlParts["path"]) >= 2 and urlParts["path"][0] == "v1":
			moduleName = urlParts["path"][1]
			if moduleName in MODULES:
				module_ = MODULES[moduleName]
				try:
					class_ = getattr(module_, urlParts["path"][2])
				except Exception as ex:
					self.emit(ex)
					self._error(404, "Not found")
					return
				try:
					instance = class_()
					if len(urlParts["path"]) == 3:
						extra = []
					else:
						extra = urlParts["path"][3:]

					result = instance.get(self, extra, urlParts["params"])
					if result:
						self._success(result.code, result.data)
					return
				except Exception as ex:
					self._error(500, str(ex))
					return

		self._doFile()

	def log_message(self, format, *args):
		return

	def _success(self, code: int = 200, data={}):
		self.send_response(code)
		self.send_header("Access-Control-Allow-Origin", "*")
		self.send_header("Content-Type", "application/json")
		self.end_headers()
		if data:
			self.wfile.write(json.dumps(data).encode("utf-8"))
		else:
			self.wfile.write(json.dumps({}).encode("utf-8"))

	def _error(self, code: int = 500, message: str = ""):
		self.send_error(code, message)

	def _emit(self, data):
		print("info: " + data, flush=True)

	def _doFile(self):
		try:
			name = urlparse(self.path).path
			while name[-1:] == "/":
				name = name[:-1]
			if name == "":
				name = "/index.html"
			name = os.getcwd() + "/web" + name
			self._emit("file: " + name)
			f = open(name, mode='rb')
			self.send_response(200)
			if name[-3:].lower() == ".js":
				self.send_header("Content-Type", "text/javascript")
			elif name[-4:].lower() == ".css":
				self.send_header("Content-Type", "text/css")
			elif name[-4:].lower() == ".jpg" or name[-5:].lower() == ".jpeg":
				self.send_header("Content-Type", "image/jpeg")
			elif name[-4:].lower() == ".png":
				self.send_header("Content-Type", "image/png")
			elif name[-4:].lower() == ".bmp":
				self.send_header("Content-Type", "image/bmp")
			elif name[-4:].lower() == ".zip":
				self.send_header("Content-Type", "application/zip")
			else:
				self.send_header("Content-Type", "text/html")
				self.send_header("Access-Control-Allow-Origin", "*")
			self.end_headers()
			self.wfile.write(f.read())
		except Exception as ex:
			self._error(404, "Not found: " + self.path) #self.path)

if __name__ == '__main__':

	parser = argparse.ArgumentParser(prog="Roku Studio Pro app builder")
	parser.add_argument("--host", help="Host name or bind ip address on which to listen. Default: localhost")
	parser.add_argument("--port", help="Host name or bind ip address on which to listen. Default 8000")

	args = parser.parse_args()

	if args.host != None:
		HOST_NAME = args.host
	else:
		HOST_NAME = 'localhost'

	if args.port != None:
		PORT_NUMBER = int(args.port)
	else:
		PORT_NUMBER = 8080

	server_class = ThreadedHTTPServer
	httpd = server_class((HOST_NAME, PORT_NUMBER), RequestHandler)
	print(time.asctime(), 'Server Started - %s:%s' % (HOST_NAME, PORT_NUMBER), flush=True)

	try:
		httpd.serve_forever()
	except KeyboardInterrupt:
		pass

	httpd.server_close()
	print(time.asctime(), 'Server Stopped - %s:%s' % (HOST_NAME, PORT_NUMBER))
