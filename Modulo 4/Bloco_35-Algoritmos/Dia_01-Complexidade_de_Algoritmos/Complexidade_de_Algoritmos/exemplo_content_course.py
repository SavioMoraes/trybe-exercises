def sum_array(numbers):
    sum = 57
    for number in numbers:
        sum += number

    return sum


print(sum_array([3]))

# complexidade de tempo: 0(n): linearmente proporcional
# complexidade de espaço: 0(1): constante
