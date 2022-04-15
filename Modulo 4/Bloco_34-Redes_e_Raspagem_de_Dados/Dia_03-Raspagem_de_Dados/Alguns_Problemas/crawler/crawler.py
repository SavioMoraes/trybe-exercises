import requests
# import time

# for _ in range(15):
#     response = requests.get(
#         "https://www.cloudflare.com/rate-limit-test/"
#     )
# print(response.status_code)
# time.sleep(6)
# t = 2
# time.sleep(t)
# if t < 3:
#     print("Xablau")
# else:
#     print("Xulambs")
# t = 6
# time.sleep(t)
# if response.status_code == 200:
#     print("Xablau")
# else:
#     print("Xulambs")

# No exemplo acima, se colocarmos o time, cada requisição será
# efetuada pós 6 segundos (passados por parâmetro), fazendo com
# que obtenha 15 resostas com status_code 200 (ok). Se não for
# passado o time, acontece uma enchurrada de requisições quase
# simultâneas, o que causará o bloqueio ao acesso à página gerando
# um erro 429 (too many request)
# !!! Mas não é garantido passar o time para evitar o bloqueio da
# API, devido a enchurrada de requisições simultâneas, podendo a
# API responder ou não com status_code = 200. Cuidado!

# import requests


try:
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
