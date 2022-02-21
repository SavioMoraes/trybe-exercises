file = open("arquivo.txt", mode="w")
# ao abrir um arquivo para escrita, um novo arquivo é
# criado mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

print("Túlio 22", file=file)  # escrevendo com o print(), primeiro
# parâmetro a info e no segundo file recebendo o nome do arquivo

# insere várias infos ao arquivo
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close()  # sempre fechar!!!

# cria quantos arquivos forem assados no range...
arquivos = []
for index in range(12):
    arquivos.append(open(f"arquivo{index}.txt", "w"))


# escrita --> sobrescreveu o que estava armazenado, CUIDADO!!!
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


# escrita
file1 = open("arquivo2.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file1.writelines(LINES)
file1.close()

# leitura
file1 = open("arquivo2.txt", mode="r")
for line in file:
    print(line)
    # não esqueça que a quebra de linha também é um caractere da linha
file1.close()  # não podemos esquecer de fechar o arquivo


# escrita
file2 = open("arquivo.dat", mode="wb")
file2.write(b"C\xc3\xa1ssio 30")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file2.close()

# leitura
file2 = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file2.close()  # não podemos esquecer de fechar o arquivo
