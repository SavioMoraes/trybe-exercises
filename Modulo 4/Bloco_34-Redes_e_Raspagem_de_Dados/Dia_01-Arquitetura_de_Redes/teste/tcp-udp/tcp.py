from socketserver import TCPServer, StreamRequestHandler
# socketserver, nativo do python. importando as classes TCPServer, que
# é nosso servidor TCP e outra pra gerenciar as requisições (handle) e
# como vai ser de arquivo (conjunto de bits - 0 e 1), utiliza-se o
# StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.white(b"Cliente desconectado")
                break
            print(data)


server_adrees = ("localhost", 8080)
with TCPServer(server_adrees, TCPHandler) as server:
    print("Server TCP ativo")
    server.serve_forever()
