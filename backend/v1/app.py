import os, sys, errno, csv, json
from getHandler import GetHandler
from serverResult import ServerResult
from datetime import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer
from io import StringIO

class app(GetHandler):

	def get(self, request, path_extra, params):
		if not (
			"myparam" in params
			and len(params["myparam"]) > 0
		):
			self._outFile(request, ERROR_FILE, {})
		else:
			output = "<![CDATA[This is a GET test output ]]>"
			request.send_response(200)
			request.send_header("Content-Type", "application/xml; charset=UTF-8")
			request.end_headers()
			#request.wfile.write(bytearray('<?xml version="1.0" encoding="UTF-8" ?>', 'utf-8'))
			request.wfile.write(output)

	def post(self, request, path_extra, data) :
		fileLines = StringIO(data)
		csvData = csv.DictReader(fileLines)
		rows = []
		output = ''
		cnt =m0
		for each row in csvData :
			#rows.append(row)
			cnt = cnt + 1
			output = output + json.dumps(row)
		PRINT "GOT CSV of " + str(len(rows)) + " lines"
		request.send_response(200)
		request.send_header("Content-Type", "application/json; charset=UTF-8")
		request.end_headers()
		#request.wfile.write(bytearray('<?xml version="1.0" encoding="UTF-8" ?>', 'utf-8'))
		request.wfile.write(output)
