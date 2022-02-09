# vídeo Gustavo Caetano (Gus)
def imc(peso, altura):
    return peso / (altura / 100) ** 2


# Duas formas de passar os valores dos parâmetros na chamada da função:

# 1ª: forma POSICIONAL, coloca-se o valor de acordo com a posição do parâmetro:
print(imc(100, 185))

# 2ª: forma NOMINAL / NOMEADA, coloca-se o nome do parâmetro, setando o valor:
print(imc(peso=85, altura=182))


# course:


def soma(x, y):
    return x + y


print(soma(2, 2))  # os parâmetros aqui são posicionais

print(soma(x=5, y=5))  # aqui estamos nomeando os parâmetros


# Os parâmetros também podem ser variádicos. Ou seja, podem variar
# em sua quantidade. Parâmetros posicionais variádicos são acessados
# como tuplas no interior de uma função e parâmetros nomeados variádicos
# como dicionário.


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos
    # de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string


# pode ser chamado com 2 parâmetros
print(concat("Carlos", "João"))  # saída: "Carlos, João"

# pode ser chamado com um número n de parâmetros
print(concat("Carlos", "João", "Maria"))  # saída: "Carlos, João, Maria"

# dict é uma função que já vem embutida no python
print(dict(nome="Felipe", sobrenome="Silva", idade=25))
# cria um dicionário utilizando as chaves passadas

print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))
# o número de parâmetros passados para a função pode variar


# Variáveis definidas dentro das funções tem escopo local, porém uma
# função quando não encontra um nome no escopo local irá procurar no
# espaço de nomes global.

# Em alguns casos, podemos querer limitar um parâmetro em nomeado ou
# posicional para evitar ambiguidades e/ou aumentar legibilidade.

print(len([1, 2, 3, 4]))  # função len não aceita argumentos nomeados

print(len(obj=[1, 2, 3, 4]))  # este código irá falhar

print("Botaro", "Cássio", ", ")  # imprime Botaro Cássio ,

print("Botaro", "Cássio", sep=", ")
# nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio


# ESCOPO - PYTHON

def incrementa(x):
    x = x + 1
    return x


x = 10

print(incrementa(x))  # valor de 11, executa de dentro do escopo da função
print(x)  # valor de 10, execura de fora do escopo da função, cuidado! (Global)
