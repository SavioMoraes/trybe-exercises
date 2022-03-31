# Podemos instanciar um set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjuntoA = set()
print(conjuntoA)

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjuntoB = set([1, 1, 2, 3, 3, 3])
print(conjuntoB)


# Add - adiciona o elemento ao conjunto
conjuntoA.add(5)
conjuntoA.add(3)
conjuntoA.add(0)
print(conjuntoA)


# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjuntoA.add('elemento')
print(conjuntoA)


# Temos 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
# conjuntoB.remove(3)
# print(conjuntoB)


# Vai dar erro pois já removemos esse elemento e set não guarda duplicatas
# conjuntoB.remove(3)
# print(conjuntoB)


# Não vai dar erro
conjuntoB.discard(3)
print(conjuntoB)


# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando queremos trabalhar com algum elemento do
#   set, mas não sabemos de antemão quais elementos estão dentro dele.
some_element = conjuntoA.pop()
print(some_element)
print(conjuntoA)

# clear() remove todos os itens do set
conjuntoB.clear()
print(conjuntoB)


# Consulta
# A consulta é feita com o operador "in"
if 3 in conjuntoA:
    print(conjuntoA)
    print("3 está em A")

if 7 not in conjuntoA:
    print("7 não está em A")
