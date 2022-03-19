import dis


def reverse(array):
    if len(array) <= 1:
        return array

    return [array[-1]] + reverse(array[: len(array) - 1])


array = ["1luciano", "2wander", "3kevin", "4patricia", "5aythan"]
print(reverse(array))
dis.dis(reverse)
