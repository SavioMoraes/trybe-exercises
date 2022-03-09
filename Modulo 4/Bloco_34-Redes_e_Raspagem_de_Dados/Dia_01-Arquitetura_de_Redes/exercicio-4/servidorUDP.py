from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()

# para rodar é o mesmo princípio do TCP, primeiro roda com o comando
# python! Só que aqui no UDP, o comando é: "nc -u 127.0.0.1 8084" e
# não: "nc -t 127.0.0.1 8084" como no TCP...
# ==> -u != -t <==
