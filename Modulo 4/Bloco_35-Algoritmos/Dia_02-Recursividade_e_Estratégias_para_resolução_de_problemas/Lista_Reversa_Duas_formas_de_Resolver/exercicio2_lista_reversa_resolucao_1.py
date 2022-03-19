"""
Exercício 2:
Reversecorp Faça uma função que recebe uma lista,
e retorna-a na ordem reversa.
"""


def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


print(reverse([1, 2, 3, 4, 5]))


# Nesta solução iterativa, percorremos a lista inserindo
# seus elementos em uma nova lista, porém a inserção
# ocorre no começo da lista (posição 0), assim a ordem
# se inverte.
