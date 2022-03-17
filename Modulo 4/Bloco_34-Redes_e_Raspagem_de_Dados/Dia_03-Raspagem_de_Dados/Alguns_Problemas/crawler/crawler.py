import requests
import time

for _ in range(1):
    response = requests.get(
        "https://www.cloudflare.com/rate-limit-test/"
    )
    # print(response.status_code)
    t = 2
    time.sleep(t)
    if t < 3:
        print("Xablau")
    else:
        print("Xulambs")

# No exemplo acima, se colocarmos o time, cada requisição será
# efetuada pós 6 segundos (passados por parâmetro), fazendo com
# que obtenha 15 resostas com status_code 200 (ok). Se não for
# passado o time, acontece uma encherrada de requisições quase
# simultâneas, o que causará o bloqueio ao acesso à página gerando
# um erro 429 (too many request)

# import requests


# try:
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.Timeout:
#     response = requests.get("http://httpbin.org/delay/1", timeout=2)
# finally:
#     print(response.status_code)
