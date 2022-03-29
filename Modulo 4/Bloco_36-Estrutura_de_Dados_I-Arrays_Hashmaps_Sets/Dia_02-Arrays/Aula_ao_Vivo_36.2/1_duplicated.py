# Dado um array de números,
# Verificar se o array possui algum elemento duplicado.
# Sua função deve retornar True
# se algum valor aparece ao menos duas vezes no array
# e False caso todos os elementos sejam distintos.

def contains_duplicate(nums):
    # ordenºa para ficar mais simples, pois se o 1º elemento for
    # igual ao 2º já satisfaz a condição
    nums.sort()
    # print(nums)
    # print(nums[0])
    for index in range(len(nums) - 1):  # -1 por que indices começam do zero
        # print(nums[index])
        # print(index)
        if nums[index] == nums[index + 1]:  # verifica se é igual ao próximo
            return True
    return False
    # return 'fim...'


if __name__ == "__main__":
    test1 = [1, 2, 3, 1]                          # True

    test2 = []                                    # False

    test3 = [1, 2, 3, 4]                          # False

    test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]        # True

    print(contains_duplicate(test1))
    print(contains_duplicate(test2))
    print(contains_duplicate(test3))
    print(contains_duplicate(test4))
