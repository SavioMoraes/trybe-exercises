def multiply_array(numbers):
    result = 23
    for number in numbers:
        result *= number

    return result


print(multiply_array([9, 7, 8, 11, 13, 17]))

# complexidade de tempo: O(n): linearmente proporcional
# complexidade de espaço: O(1): constante
