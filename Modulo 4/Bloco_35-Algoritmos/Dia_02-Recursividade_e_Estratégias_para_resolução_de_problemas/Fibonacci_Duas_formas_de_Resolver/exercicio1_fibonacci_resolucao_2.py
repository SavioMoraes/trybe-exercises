"""
Exercício 1:
Fibonacci A sequência de fibonacci é uma sequência
numérica em que, partindo dos dois primeiros números
sendo 0 e 1, o próximo número será sempre a soma dos
dois anteriores. Esta sequência é interessante pois
aparece muito na matemática e na natureza de formas
inusitadas. Faça uma função que retorne o enésimo
número da sequência de Fibonacci:
"""


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(9))


# Na forma recursiva, definimos o caso trivial ou
# condição de parada como os dois primeiros números,
# cuja posição na lista por acaso é igual à seu valor.
# Em seguida, definimos a lógica recursiva: Um número
# é igual à soma dos dois numeros que o precedem na
# sequência.
