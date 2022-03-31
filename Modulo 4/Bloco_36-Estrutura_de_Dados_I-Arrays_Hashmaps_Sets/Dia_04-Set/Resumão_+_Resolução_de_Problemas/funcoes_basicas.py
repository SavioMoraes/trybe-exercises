list_a = [1, 3, 4, -43, 2, 0]
print(list_a)
list_b = [4, 4, 9, 578, 12]
print(list_b)

print("------------------------------------------------------------------")
# Instanciar adicionando itens
set_a = set()
print(set_a)
for item in list_a:
    set_a.add(item)
print(set_a)

set_b = set()
print(set_b)
for item in list_b:
    set_b.add(item)
print(set_b)

print("------------------------------------------------------------------")

# Instanciar direto com listas
set_a = set(list_a)
print(set_a)
set_b = set(list_b)
print(set_b)

print("------------------------------------------------------------------")

# Instanciar com a notação de chaves
set_c = {-3, 0, 3, 4}
print(type(set_c))
print(set_c)

print("------------------------------------------------------------------")

# Principais operações com set
set_union = set_a.union(set_b)
print(set_union)
set_intersection = set_a.intersection(set_b)
print(set_intersection)
set_difference_a = set_a.difference(set_b)
print(set_difference_a)
set_difference_b = set_b.difference(set_a)
print(set_difference_b)

print("------------------------------------------------------------------")

# Operadores com muitos conjuntos
result = set_a.union(set_b, {-1, -2, -3, -100000})
print(result)

print("------------------------------------------------------------------")

# Operadores de comparação
set_a = set(list_a)
list_d = [2, 0, -43, 1, 3, 4]
list_e = [1, 3, 4, -43, 2, 0, 5, 10]
set_d = set(list_d)
set_e = set(list_e)
print(set_d)
print(set_a == set_b)
print(set_a == set_d)
print(set_a != set_b)
print(set_a > set_b)  # para verificar subconjuntos
print(set_b > set_a)
print(set_a > set_d)
print(set_a > set_e)
# set_a é subconjunto de set_e que um superconjunto com relação a set_a
print(set_e > set_a)
