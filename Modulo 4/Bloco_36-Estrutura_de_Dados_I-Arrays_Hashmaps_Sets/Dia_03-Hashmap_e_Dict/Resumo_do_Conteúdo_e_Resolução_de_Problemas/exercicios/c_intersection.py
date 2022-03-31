# Interseção entre listas:
"""
Quais elementos da lisa A também ocorrem na lista B?
Ou seja, qual é a intersecção entre as listas?

listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]

resposta = [4, 5, 6]
"""


def intersection(listA, listB):
    # criar dict da listA
    see_in_a = {}
    # mapear com booleanos! Eles ocupam pouco espaço de memória
    for item in listA:
        if item not in see_in_a:
            see_in_a[item] = True
    # conferir com a listB
    answer = []
    for item in listB:
        if item in see_in_a:
            answer.append(item)
    return answer
