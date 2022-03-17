from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        print(self.rfile.readline().strip().decode("UTF-8"))


if __name__ == "__main__":
    server_address = ("localhost", 9091)
    with UDPServer(server_address, UDPHandler) as server:
        print("Server UDP ativo")
        server.serve_forever()
