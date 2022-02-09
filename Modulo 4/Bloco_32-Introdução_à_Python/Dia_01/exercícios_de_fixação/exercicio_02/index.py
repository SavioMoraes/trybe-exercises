# len = retorna o número de itens em um objeto
# fonte: https://www.w3schools.com/python/ref_func_len.asp


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([1, 3, 5, 11]))
