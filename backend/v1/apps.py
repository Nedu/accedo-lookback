import os, sys, errno
from getHandler import GetHandler
from serverResult import ServerResult
from datetime import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer

class apps(GetHandler):

	def get(self, request, path_extra, params):
		if not (
			"ip" in params
			and len(params["ip"]) > 0
		):
			self._outFile(request, ERROR_FILE, {})
		else:
			ip = params["ip"]
			roku_device = rokuDevice(ip)
			output = roku_device.get("/query/apps")
			request.send_response(200)
			request.send_header("Content-Type", "application/xml; charset=UTF-8")
			request.end_headers()
			#request.wfile.write(bytearray('<?xml version="1.0" encoding="UTF-8" ?>', 'utf-8'))
			request.wfile.write(output)

