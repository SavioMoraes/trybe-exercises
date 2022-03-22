def next_greatest_letter(letters, target):

    low_index = 0
    high_index = len(letters)

    while low_index < high_index:

        middle_index = (high_index + low_index) // 2

        if letters[middle_index] <= target:
            low_index = middle_index + 1

        else:
            high_index = middle_index

    return letters[low_index % len(letters)]


if __name__ == "__main__":
    letras1 = ["c", "f", "j"]
    alvo1 = "a"  # saída: c
    alvo2 = "d"  # saída: f
    alvo3 = "g"  # saída: j

    print(f"A saída foi: {next_greatest_letter(letras1, alvo1)}")
    print(f"A saída foi: {next_greatest_letter(letras1, alvo2)}")
    print(f"A saída foi: {next_greatest_letter(letras1, alvo3)}")
