from linked_list_content import LinkedList


class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def __str__(self):
        # return f"LinkedList({self.__data})"
        return f"{self.__data}"

    def size(self):
        return len(self.__data)

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))


if __name__ == "__main__":
    content_stack = Stack()
    print(content_stack)
    print(content_stack.size())
    print(content_stack.is_empty())

    content_stack.push(1)
    content_stack.push(2)
    content_stack.push(3)
    content_stack.push(4)
    content_stack.push(5)
    print(content_stack)
    print(content_stack.size())
    print(content_stack.is_empty())
