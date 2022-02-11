import json

# with: com este comando o código vai para dentro de um contexto e
# fecha ao sair do with, não precisando fechar com o clse()!!!

# esse comando abaixo já dá para visualizar que o objeto json está
# sendo lido com sucesso, abaixo exemplo da conversão!!!
# with open('super-heroes.json') as superheroes_file:
#     print(superheroes_file.read())

with open("super-heroes.json") as superheroes_file:
    print(json.load(superheroes_file)[0]["superhero"])
