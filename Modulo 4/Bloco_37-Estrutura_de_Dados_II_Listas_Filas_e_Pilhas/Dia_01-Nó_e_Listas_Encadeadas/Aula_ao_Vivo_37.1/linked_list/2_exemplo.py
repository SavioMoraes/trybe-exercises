from rich import print
from node import Node


class LinkedListGuard:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.__lenght = 0

    def __str__(self):
        return f"LinkedList(len={self.__lenght}, value={self.head})"

    def __len__(self):
        return self.__lenght

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next

        if self.head.next is None:
            self.tail = first_value

            self.head.next = first_value
            self.__lenght += 1

    def insert_last(self, value):
        new_last_value = Node(value)
        self.tail.next = new_last_value
        self.tail = self.tail.next
        self.__lenght += 1


if __name__ == "__main__":
    # Cria a estrutura vazia
    # onde a cabeça é um Node em que o próximo aponta para None e
    # a calda aponta para a cabeça
    lecture_list = LinkedListGuard()

    print("\nLista Vazia: ", lecture_list)
    print("[HEAD -> (TAIL)]")
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    # # Adicionado um elemento que encaixa como o próximo elemento da HEAD,
    # # a tail é atualizada para apontar para esse elemento
    lecture_list.insert_last(2)
    print("\nApós adicionar 2: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    # # # Adicionado um elemento que encaixa como o próximo elemento da TAIL,
    # # # posteriormente a tail será atualizada para apontar para esse
    # # # elemento
    lecture_list.insert_last(1)
    print("\nApós adicionar 1: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    lecture_list.insert_last(3)
    print("\nApós adicionar 3: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    # # # Adicionado um elemento que encaixa como o próximo elemento da HEAD,
    # # # a tail não é afetada
    lecture_list.insert_first(0)
    print("\nApós adicionar 0 no começo: ", lecture_list)
    print("Cabeça Sentinela: ", lecture_list.head)
    print("Calda  Sentinela: ", lecture_list.tail)

    print("\nLista completa: ", lecture_list)
