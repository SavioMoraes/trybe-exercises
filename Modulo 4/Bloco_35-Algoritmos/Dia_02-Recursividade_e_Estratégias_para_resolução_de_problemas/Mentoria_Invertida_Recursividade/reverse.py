def reverse(list):
    if len(list) == 0:
        return list
    return ([list[-1]] + reverse(list[:len(list) - 1]))


print(reverse([3, 2, 1]))
