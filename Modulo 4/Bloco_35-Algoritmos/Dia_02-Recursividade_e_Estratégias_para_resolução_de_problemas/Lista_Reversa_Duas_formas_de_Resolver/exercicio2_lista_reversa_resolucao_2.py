"""
Exercício 2:
Reversecorp Faça uma função que recebe uma lista,
e retorna-a na ordem reversa.
"""


def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


print(reverse([4, 3, 2, 1]))


# Nesta solução recursiva primeiro definimos a condição
# de parada, ou caso base: se a lista tiver menos de dois
# elementos, ela invertida será ela mesma. Depois, a
# lógica de recursão é: Para inverter uma lista, basta
# colocar o primeiro elemento no fim, e depois inverter
# o resto da lista.
