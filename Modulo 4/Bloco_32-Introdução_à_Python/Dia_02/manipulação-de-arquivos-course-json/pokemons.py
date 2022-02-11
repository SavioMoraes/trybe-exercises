import json  # json é um modulo que vem embutido, porém precisamos importá-lo

# utilizando 'loads', no plural, ccarrega o json a partir de um texto
# with open("pokemons.json") as file:
#     content = file.read()  # leitura do arquivo
#     pokemons = json.loads(content)["results"]
#     # o conteúdo é transformado em estrutura python equivalente,
#     # dicionário neste caso acessamos a chave results que é onde
#     # contém nossa lista de pokemons

# # print(pokemons)  # imprime todos os pokemons que estão dentro do
# # array results
# print(pokemons[0])  # imprime o primeiro pokemon da lista

# utilizando 'load', singular, carrega o json a partir de um arquivo
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])
