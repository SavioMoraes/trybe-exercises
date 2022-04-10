from doubly_node import DoublyNode
from rich import print


class DoublyLinkedList:

    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.tail = DoublyNode("TAIL")
        self.head.next = self.tail
        self.tail.previous = self.head
        self.__length = 0

    def __str__(self):
        return f"DoublyLinkedList(len={self.__length} value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DoublyNode(value)
        node_value.previous = self.tail.previous
        node_value.next = self.tail
        node_value.previous.next = node_value
        self.tail.previous = node_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        new_node = DoublyNode(value)
        position_node = self.__get_node_at(position)
        new_node.next = position_node
        new_node.previous = position_node.previous
        new_node.previous.next = new_node
        position_node.previous = new_node
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.next
            element_later_than_removed = value_to_be_removed.next
            self.head.next = element_later_than_removed
            element_later_than_removed.previous = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.tail.previous
            element_later_than_removed = value_to_be_removed.previous
            self.tail.previous = element_later_than_removed
            element_later_than_removed.next = self.tail
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.__get_node_at(position)

            previous_to_be_removed = value_to_be_removed.previous
            next_to_be_removed = value_to_be_removed.next

            previous_to_be_removed.next = next_to_be_removed
            next_to_be_removed.previous = previous_to_be_removed

            value_to_be_removed.reset()
            self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = DoublyNode(value_to_be_returned.value)
        return value_returned

    def __get_node_at(self, position):
        value_to_be_returned = None
        if self.head.next != self.tail:
            value_to_be_returned = self.head.next
            while position > 0:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def is_empty(self):
        return not self.__length

    # Exercício 4 : Remover duplicatas de uma DoublyLinkedList,
    # atividade extraída e adaptada do LeetCode. Nesta atividade
    # será necessário implementar um algoritmo que receba uma
    # DoublyLinkedList como argumento e retorne uma nova lista,
    # sem elementos que possuem mais de uma ocorrência.

    """
    # input: 1 <-> 1 <-> 2
    # saída: 2

    # input: 1 <-> 1 <-> 2 <-> 3 <-> 3
    # saída: 2

    # input: 1 <-> 2 <-> 3 <-> 3
    # saída: 1 <-> 2
    """

    # Nesta atividade vamos utilizar uma função para identificar
    # se o elemento que já foi removido da lista ainda possui
    # alguma referência na estrutura, caso não tenha, o adicionaremos
    # na nova lista.

    def delete_duplicates(linkedList):
        list_with_unique_elements = DoublyLinkedList()

        while linkedList:
            current_node = linkedList.remove_first()
            if linkedList.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

            return list_with_unique_elements

    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


if __name__ == "__main__":
    doubly = DoublyLinkedList()
    print("\nLista Vazia:\n", doubly)

    doubly.insert_last(1)
    doubly.insert_last(1)
    doubly.insert_last(2)
    print(doubly)
    doubly.delete_duplicates()
    print(doubly)
