def multiply_array(numbers):
    result = 23
    for number in numbers:
        result *= number

    return result


print(multiply_array([9, 7, 8, 11, 13, 17]))

# complexidade de tempo: 0(n): linearmente proporcional
# complexidade de espaço: 0(1): constante
