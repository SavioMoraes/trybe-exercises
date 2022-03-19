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


def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n + 1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


print(fibonacci_iter(9))


# Na forma iterativa, calculamos todos os números da
# sequência até o número desejado.
