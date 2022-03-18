def more_than_twenty_five_percent(array):
    twenty_five_percent = len(array) // 4
    seventy_five_percent = len(array) - twenty_five_percent
    for index, element in enumerate(array[:seventy_five_percent]):
        if element == array[index + twenty_five_percent]:
            return element
    return -1


if __name__ == "__main__":
    test1 = [1, 2, 2, 6, 6, 6, 6, 7, 10]        # saída: 6
    test2 = [1, 1, 2, 3]                        # saída: 1
    test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     # saída: -1
    print(f"O elemento encontrado para teste1: {test1} ")
    print(f"foi {more_than_twenty_five_percent(test1)} ")
    print(f"O elemento encontrado para teste2: {test2} ")
    print(f"foi {more_than_twenty_five_percent(test2)} ")
    print(f"O elemento encontrado para teste3: {test3} ")
    print(f"foi {more_than_twenty_five_percent(test3)} ")

# Obs.: O código retorna o primeiro elemento correspondente a >= 25%
# se houver outro número, depois, que também satisfaça a condição,
# o mesmo será ignorado no retorno e/ou até mesmo nem será conferido
# nesse código que para aos 75%.
