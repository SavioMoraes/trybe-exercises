import requests
import time

for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(6)

# No exemplo acima, se colocarmos o time, cada requisição será
# efetuada pós 6 segundos (passados por parâmetro), fazendo com
# que obtenha 15 resostas com status_code 200 (ok). Se não for
# passado o time, acontece uma encherrada de requisições quase
# simultâneas, o que causará o bloqueio ao acesso à página gerando
# um erro 429 (too many request)
