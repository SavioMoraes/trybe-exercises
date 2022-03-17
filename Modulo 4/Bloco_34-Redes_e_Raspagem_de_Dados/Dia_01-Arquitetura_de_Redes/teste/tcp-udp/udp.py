from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                break
            print(data)


if __name__ == "__main__":
    server_adrees = ("localhost", 9090)
    with UDPServer(server_adrees, UDPHandler) as server:
        server.serve_forever()
