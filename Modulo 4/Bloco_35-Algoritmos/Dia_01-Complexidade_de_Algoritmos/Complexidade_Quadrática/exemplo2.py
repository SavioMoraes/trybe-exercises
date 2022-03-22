import time


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5]
meu_array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

multiply_arrays(meu_array, meu_array)

# para ver o result:
print(multiply_arrays(meu_array, meu_array))
# print(multiply_arrays(meu_array2, meu_array2))


# mosra o tempo de execução em segundos...
print(time.time())

# o comando < print(multiply_arrays(meu_array, meu_array)) >,
# rodado no terminal (ñ do python, o comum), também mostra o tempo!
