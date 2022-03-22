"""Testando bpython"""
# def soma(a, b):
#     return a + b

"""
Soma de elementos:
Crie uma função recursiva que receba uma lista de inteiros
como parâmetro e retorne a soma de todos os elementos da
lista. Exemplo:
soma([1, 2, 3])
6
"""


def sum(array):
    if len(array) == 1:
        return array[0]
    else:
        return (
            array[-1] +  # o '-1' pega o último de traz pra frente
            sum(array[:len(array) - 1])  # com esse parâmetro
            # pega só até o penúltimo, pois o '-1' exclui o último.
            # o '[:xablau] é um slice python (pesquisar!!)
            # a função pega o último elemento e soma com todos os
            # outros, menos, ele, até a condição de parada, que é
            # ser == 1!!! (Recursividade)
        )


print(sum([1, 2, 3, 4, 5]))


# refatorando com o and:
def sum2(array):
    return len(array) and array[0] + sum(array[1:])


print(sum2([1, 2, 3, 4, 5]))
# nesse segundo exemplo o código quebra se passarmos um
# array com apenas 1 elemento, pois não tratamos o caso
# de parada!!!


"""
    Escada de asterisco:
Crie uma função que receba o número de degraus da escada de
asteriscos como parâmetro e printe a escada. Exemplo:

asterisk_stair(5)
*
**
***
****
*****
"""


def asterisk_stair(n):
    if n == 1:
        print("*")
        return None
    asterisk_stair(n - 1)
    print(n * '*')


print(asterisk_stair(5))
