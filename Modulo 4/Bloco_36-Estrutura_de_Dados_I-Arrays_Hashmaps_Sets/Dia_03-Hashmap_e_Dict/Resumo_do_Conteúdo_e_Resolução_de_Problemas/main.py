from exercicios.a_count_nums import find_the_most_frequent_number
from exercicios.b_word_screening import screening
from exercicios.c_intersection import intersection


"""
QUANDO USAR HASHMAP???

CASOS TÍPICOS:
    -> Guardar registros;
    -> Contagem de itens;
    -> Triagem de itens por algumas características;
    -> Comparar o conteúdo de 2 listas
"""

# Encontrar o número mais frequente num array:
nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
print(find_the_most_frequent_number(nums))
print("----------------------------------------------------------------------")


# Separar palavras de acordo com a sua letra inicial:
text = [
    'ana', 'ama', 'joao', 'que', 'ama', 'jose',
    'mas', 'jose', 'nao', 'ama', 'ana'
]
# .items, retorna uma tupla com 2 valores (a chave e o valor)!!! <==
for key, value in screening(text).items():
    print(f"{key}: {value}")

print("----------------------------------------------------------------------")
# Interseção entre listas:
listaA = [1, 2, 3, 4, 5, 6]
listaB = [4, 5, 6, 7, 8, 9]
print(intersection(listaA, listaB))
