# import json
import csv

# with: com este comando o código vai para dentro de um contexto e
# fecha ao sair do with, não precisando fechar com o clse()!!!

# esse comando abaixo já dá para visualizar que o objeto json está
# sendo lido com sucesso, abaixo exemplo da conversão!!!
# with open('super-heroes.json') as superheroes_file:
#     print(superheroes_file.read())


# com este comendo visualizamos todo o json, se acrescentarmos o indice,
# visualizamos só o herói correspondente e com o indíce mais chave,
# podemos acessar o nome do herói!
# with open("super-heroes.json") as superheroes_file:
#     print(json.load(superheroes_file)[0]["superhero"])

# com este comando, salvamos o array que é o json numa lista e para cada
# item da lista, no caso um herói, imprimimoss o alter_ego
# (nome disfarçado) do herói, seia o Clark Kent do Super Man...!!!
# with open("super-heroes.json") as superheroes_file:
#     superheroes_list = json.load(superheroes_file)
#     for superhero in superheroes_list:
#         print(superhero["alter_ego"])
#         print(superhero["superhero"])


# UTILIZANDO CSV: Project Job Insights

# o import está nas primeiras linhas....!!!!!

# dando print na lista pra testar se leu o csv!!!
# traz um objeto csvDicReader..., não traz o objetão!!!
# with open("dc-wikia-data.csv") as superheroes_file:
#     superheroes_list = csv.DictReader(superheroes_file)
#     print(superheroes_list)

# ao ser mais específico com o 'for', o resultado esperado já aparece!!!
# para imrimir todo o objeto, passamos superhero sem parâmetro
# with open("dc-wikia-data.csv") as superheroes_file:
#     superheroes_list = csv.DictReader(superheroes_file)
#     for superhero in superheroes_list:
#         # print(superhero["name"])
#         print(superhero)

# sintaxe com header...!!!
# traz todo o objeto (formato de Dict) se chamar pela lista
# traz o cabeçalho, se chamar pelo header
# with open("dc-wikia-data.csv") as superheroes_file:
#     header, *superheroes_list = csv.reader(superheroes_file)
#     # print(superheroes_list)
#     print(header)

# fazendo a impressão mais específica não retorna um dicionário, mas
# uma lista com valores...
with open("dc-wikia-data.csv") as superheroes_file:
    header, *superheroes_list = csv.reader(superheroes_file)
    for superhero in superheroes_list:
        print(superhero)
