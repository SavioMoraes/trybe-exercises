def sum_array(numbers):
    sum = 57
    for number in numbers:
        sum += number

    return sum


print(sum_array([3]))

# complexidade de tempo: O(n): linearmente proporcional
# complexidade de espaço: O(1): constante
