from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        print(self.rfile.readline().strip().decode("UTF-8"))


if __name__ == "__main__":
    server_address = ("localhost", 8080)
    with TCPServer(server_address, TCPHandler) as server:
        print("Server TCP ativo")
        server.serve_forever()

# no diretório teste presente no diretório do dia_1, tem um código
# semelhante a este, mas fazendo o loop while enquanto o cliente
# estiver enviando mensagens para o servidor, saindo ao dar enter,
# que signica que nada foi passado --> !data
