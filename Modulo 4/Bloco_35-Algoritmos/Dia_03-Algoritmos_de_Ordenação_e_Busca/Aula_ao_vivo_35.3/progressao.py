# Verificar se o array inserido possui progressão
# aritmética. Retornando True e False


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i

        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value
    return array


def can_make_arithmetic_progression(nums):
    insertion_sort(nums)

    common_diference = nums[1] - nums[0]
    for index in range(1, len(nums)):
        if nums[index] - nums[index - 1] != common_diference:
            return False
    return True


if __name__ == "__main__":
    test1 = [1, 3, 5]  # saída: True
    test2 = [3, 6, 1]  # saída: False
    test3 = [7, 43, 19, 25, 1, 31, 37, 13]  # saída: True
    test4 = [7, 43, 19, 25, 1, 32, 37, 13]  # saída: False
    test5 = [1, 2]  # saída: True
    print(f"Entrada {test1} Saída: {can_make_arithmetic_progression(test1)}.")
    print(f"Entrada {test2} Saída: {can_make_arithmetic_progression(test2)}.")
    print(f"Entrada {test3} Saída: {can_make_arithmetic_progression(test3)}.")
    print(f"Entrada {test4} Saída: {can_make_arithmetic_progression(test4)}.")
    print(f"Entrada {test5} Saída: {can_make_arithmetic_progression(test5)}.")
