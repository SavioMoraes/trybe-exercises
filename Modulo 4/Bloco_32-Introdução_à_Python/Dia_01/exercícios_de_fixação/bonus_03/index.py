def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total


print(summation(5))

# 🦜 Dica: a função sum já existe nativamente no Python!


def soma_de_todos_os_numeros(limit):
    return sum(range(1, limit + 1))


print(soma_de_todos_os_numeros(5))
