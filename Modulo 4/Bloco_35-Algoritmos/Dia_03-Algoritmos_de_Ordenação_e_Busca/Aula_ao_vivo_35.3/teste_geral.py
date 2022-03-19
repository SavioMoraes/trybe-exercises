from operator import itemgetter

# array = [5, 3, 1, 2]

# print(sorted(array))  # uma maneira de ordenar

# array.sort()  # outra maneira de ordenar

# print(array)

"""------------------------------------------------------------------"""

# msg = sorted(
#     "Estude programação hoje e ganhe dinheiro amanhã".split(),
#     key=str.lower
# )

# print(msg)

"""------------------------------------------------------------------"""

melhor_turma = [
    ("Thor Moraes", "A", 4),
    ("Sávio Moraes", "B", 41),
    ("Vera Ramos", "B", 41),
    ("Noah Moraes", "C", 16),
]


print(sorted(melhor_turma, key=itemgetter(0)))
print(sorted(melhor_turma, key=itemgetter(0), reverse=True))
print(sorted(melhor_turma, key=itemgetter(1)))
print(sorted(melhor_turma, key=itemgetter(2)))
