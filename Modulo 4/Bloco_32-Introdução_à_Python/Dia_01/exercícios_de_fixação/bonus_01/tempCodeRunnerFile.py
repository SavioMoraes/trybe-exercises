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


def minimo(numbers):
    # return min(numbers)
    # ou mesmo
    minimo = min


print(minimo(lista))
