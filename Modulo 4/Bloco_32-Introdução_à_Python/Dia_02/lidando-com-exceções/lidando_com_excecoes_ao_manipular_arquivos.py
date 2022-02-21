# try:
#     arquivo = open("arquivo.txt", "r")
# somente leitura pega o except e o finally
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")

try:
    arquivo = open("arquivo.txt", "w")
    # alterando pra escrita cai no else e finally
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")


# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no
# contexto à variável file

with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
