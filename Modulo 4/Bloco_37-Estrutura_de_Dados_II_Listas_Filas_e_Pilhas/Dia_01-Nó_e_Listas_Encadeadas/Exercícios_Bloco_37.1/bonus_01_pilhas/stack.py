from linked_list_content import LinkedList


class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))


# if __name__ == "__main__":
#     xablau = Stack()
#     xablau.push(1)
#     xablau.push(2)
#     xablau.push(3)
#     xablau.push(4)
#     xablau.push(5)
#     print(xablau)

# Não soube utilizar, explicação no bloco 37.2...
