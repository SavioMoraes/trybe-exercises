lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

# função normal


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


print(minimum(lista))

# utilizando a biblioteca 'min'
# descomentando a linha 23 e comentando a 21 não funfou!!!


def minimo(numbers):
    return min(numbers)
    # ou mesmo
    # minimo = min


print(minimo(lista))


# 🦜 Dica: a função min já existe nativamente no Python! Trabalhando
# em Python, sempre compensa pesquisar uma solução primeiro porque este
# brinquedo vem com todos os acessórios inclusos!
