# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")
print(employee_registry)


# Importante!
# Apenas objetos imutáveis podem ser utilizados como chave.
# Ou seja, apenas aqueles objetos que depois de instanciados
# não podem ser alterados. Isso varia de linguagem para linguagem.
# Em Python, os objetos imutáveis são:

"""
- int;

- float;

- string;

- tuple;

- range;

- byte;

- frozenset.
"""
