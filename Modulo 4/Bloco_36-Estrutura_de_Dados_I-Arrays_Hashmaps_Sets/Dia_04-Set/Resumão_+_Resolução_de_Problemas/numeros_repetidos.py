"""
Dada uma lista de números, retorne os números duplicados
"""
# Obs.: Exercício de fixação course (A classe set)...


def get_repeated(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num in seen_before:
            repeated.add(num)
        else:
            seen_before.add(num)

    return repeated


if __name__ == "__main__":
    numeros = [1, 6, 3, 9, 6, 7, 3, 0, 1, 6, 3, -1, 0, 3, 5, 1, 2]

    print(get_repeated(numeros))
