"""
Encontre o nº mais frequente.
Se houver empate, retorna qualquer um.

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
resosta 3
"""
# Encontrar o número mais frequente num array:


def find_the_most_frequent_number(nums):
    count = {}
    # iniciliza com o primeiro número, pois até aqui é o mais frequente!
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1  # se não existe, inclui!
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num
    return most_frequent
