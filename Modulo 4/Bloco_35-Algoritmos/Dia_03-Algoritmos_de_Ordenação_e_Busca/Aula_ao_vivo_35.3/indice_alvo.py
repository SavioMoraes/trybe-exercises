# Busca Binária
"""
Dado um array ordenado e um número alvo, retorne o índice
caso o alvo seja encontrado. Se não, retorne o índice que
o alvo deve ser inserido. (Não teremos valores duplicados)
"""


def search_insert(numbers, target):
    low_index, hight_index = 0, len(numbers)
    # a declaração acima é a mesma coisa de fazer assim:
    # low_index = 0
    # hight_index = len(numbers)
    while low_index < hight_index:
        middle_index = (low_index + hight_index) // 2

        if numbers[middle_index] < target:
            low_index = middle_index + 1
        else:
            hight_index = middle_index

    return low_index


if __name__ == "__main__":
    teste1 = [1, 3, 5, 6]
    alvo1 = 5
    # saída: 2
    print(f"Posição a ser inserido {search_insert(teste1, alvo1)}")

if __name__ == "__main__":
    teste2 = [1, 3, 5, 6]
    alvo2 = 2
    # saída: 1
    print(f"Posição a ser inserido {search_insert(teste2, alvo2)}")

if __name__ == "__main__":
    teste3 = [1, 3, 5, 6]
    alvo3 = 7
    # saída: 4
    print(f"Posição a ser inserido {search_insert(teste3, alvo3)}")

if __name__ == "__main__":
    teste3 = [1, 3, 5, 6]
    alvo3 = 0
    # saída: 0
    print(f"Posição a ser inserido {search_insert(teste3, alvo3)}")
