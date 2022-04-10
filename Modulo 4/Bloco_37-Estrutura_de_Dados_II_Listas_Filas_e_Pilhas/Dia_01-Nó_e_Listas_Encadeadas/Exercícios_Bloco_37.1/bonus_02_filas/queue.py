from linked_list_content import LinkedList


class Queue:

    def __init__(self):
        self.__data = LinkedList()

    def __str__(self):
        return f"{self.__data}"

    def size(self):
        return len(self.__data)

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)


if __name__ == "__main__":
    xablau = Queue()
    print(xablau)
    print(xablau.size())
    print(xablau.is_empty())

    xablau.enqueue(1)
    print(xablau.peek())
    xablau.enqueue(2)
    xablau.enqueue(3)
    xablau.enqueue(4)
    xablau.enqueue(5)
    print(xablau)
    print(xablau.size())
    print(xablau.peek())
    xablau.dequeue()
    xablau.dequeue()
    print(xablau)
    print(xablau.size())
    print(xablau.peek())
    print(xablau.is_empty())
