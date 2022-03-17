# import requests
# from parsel import Selector


# response = requests.get("https://www.tecmundo.com.br/novidades")
# # print(response)
# # print(response.status_code)
# # print(response.text)
# selector = Selector(text=response.text)
# print(selector)
# print("---------------------------------------------------------------------")
# urls = selector.css(".tec--card__info h3 a::attr(href)").getall()
# print(urls)

# resolução do requisito 05
# xablau = [
#     "https://www.tecmundo.com.br/tecnologia.htm",
#     "https://www.tecmundo.com.br/futebol.htm",
# ]

# xulambs = [
#     "https://www.tecmundo.com.br/ciencia.htm",
#     "https://www.tecmundo.com.br/noticias.htm"
# ]

# n = 1

# print("Xablau: ", xablau)
# print("Xulambs: ", xulambs)
# xablau.extend(xulambs)
# print("Xablau-Extend: ", xablau)

# """---------------------------------------------------------------------"""
# # traz o número de links necessários de acordo
# # com o número passado em amount!
# xablau = xablau[:n]
# # pega a quantidade de links de acordo com o numero passado pós ':'!!!
# """---------------------------------------------------------------------"""

# print("Teste: ", xablau)


# resolução do requisito 06:
dicfinal = []
disciplina1 = {
    "nome": "Python",
    "sigla": "F0D4",
    "periodo": "Noturno",
    "nota": "10",
}

print(disciplina1)
print(dicfinal)
dicfinal.append(disciplina1)
print(dicfinal)

disciplina2 = {
    "nome": "Redes",
    "sigla": "CH4T0",
    "periodo": "Noturno",
    "nota": "8",
}

print(disciplina2)
dicfinal.append(disciplina2)
print(dicfinal)

cont = 0
for item in dicfinal:
    print(item.keys())
    # for i in item:
    #     print(i[0][1])
        # lista = list(dicfinal.values())
        # print(lista)
    # print("Aluno da FHO " + lista[cont]["nome"] + "- SI")
    # print("Nota: " + lista[cont]["nota"])
    # cont += 1
