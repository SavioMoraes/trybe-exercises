# Os arrays tem sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


print(multiply_arrays([5, 4, 8], [3, 2, 1]))
