def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares


# print(squared_array([5, 10, 20, 50, 100, 5, 10, 20, 50, 100, 5, 10, 20,
# 50, 100, 5, 10, 20, 50, 100, 5, 10, 20, 50, 100, 5, 10, 20, 50, 100, 5,
# 10, 20, 50, 100, 5, 10, 20, 50, 100, 5, 10, 20, 50, 100, 5, 10, 20,
# 50, 100]))

# complexidade de tempo: 0(n): linearmente proporcional
# complexidade de espaço: 0(1): linearmente proporcional
