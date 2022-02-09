a = 5
print(type(a))

b = 5.0
print(type(b))

c = 3 + 4j
print(type(c))
print(c + 4)

nome = "Sávio Moraes"
print(type(nome))

d = False
print(type(d))


# Listas

fruits = ["orange", "apple", "grape", "pineapple"]
# elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

fruits.extend(["pear", "melon", "kiwi"])
# acrescenta uma lista de frutas a lista original

fruits.index("apple")
# retorna o índice onde a fruta está localizada, neste caso 1 em seu programa
fruits.sort()  # ordena a lista de frutas


# Tuplas:
user = ("Cássio", "Botaro", 42)
# elementos são definidos separados por vírgula, envolvidos por parenteses

print(user[0])  # acesso também por índices


# Conjuntos (set):
# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}
print(permissions)

permissions.add("root")  # adiciona um novo elemento ao conjunto
print(permissions)

permissions.add("member")
# como o elemento já existe, nenhum novo item é adicionado ao conjunto
print(permissions)

print(permissions.union({"user"}))  # retorna um conjunto resultado da união

print(permissions.intersection({"user", "member"}))
# retorna um conjunto resultante da intersecção dos conjuntos

print(permissions.difference({"user"}))
# retorna a diferença entre os dois conjuntos


# Conjuntos imutáveis (frozenset)

permissions = frozenset(["member", "group"])
print(permissions)
# assim como o set, qualquer estrutura iterável pode ser utilizada
# para criar um frozenset

# permissions.add("root")
# print(permissions)
# exemplo acima gera um erro, pois não existe o atributo add
# no objeto frozenset

print(permissions.union({"user"}))
# novos conjuntos imutáveis podem ser criados à partir do original,
# mas o mesmo não pode ser modificado

print(permissions.intersection({"user", "member"}))
# retorna um conjunto resultante da intersecção dos conjuntos

print(permissions.difference({"user"}))
# retorna a diferença entre os dois conjuntos


# Dicionários (dict)

people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}
print(people_by_id)
# elementos no formato "chave: valor" separados por vírgula,
# envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}
print(people_by_name)
# outro exemplo, dessa vez usando strings como chaves
# (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
print(people_by_id[1])  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
print(people_by_id.items())
print(people_by_name.items())
# dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores


# Range (range)

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
print(list(range(5)))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
print(list(range(1, 6)))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
print(list(range(1, 11, 2)))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
print(list(range(10, 0, -1)))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
