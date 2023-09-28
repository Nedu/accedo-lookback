

class ServerResult:
    def __init__(self, status, code, data):
        self.status = status
        self.code = code
        self.data = data	#Expecting some json.dumps encodable type (or None)
