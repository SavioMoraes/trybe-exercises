import sys


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        # retornar a atualização -> não sei como...
        return "Xablau"


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)
# quando começamos as inserções o valor muda
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# sys.getsizeof retorna o tamanho da lista em bytes
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


array.set(8, "Thor")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)


array.set(9, "Vera")
array.set(10, "Sávio")
array.set(11, "Noah")
array.set(12, "Marly")
array.set(13, "Alcides")
array.set(14, "Rihanna")
array.set(15, "Joia")
array.set(16, "BH 27")
array.set(17, "Gabi")
array.set(18, "Arrascaeta")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "ER 7")
array.set(14, "Tom")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

# para acessar um elemento do array, utilizamos seu índice
print(array)
# print(array.get(0))  # saída: Felipe
# print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

array.remove(0)
print(array)

# array.update(10, "Savio")
# print(array)
