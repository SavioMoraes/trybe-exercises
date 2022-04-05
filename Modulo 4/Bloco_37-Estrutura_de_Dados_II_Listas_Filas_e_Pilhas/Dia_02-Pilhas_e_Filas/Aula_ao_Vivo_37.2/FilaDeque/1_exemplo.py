from deque import Deque


class Queue():
    def __init__(self):  # faz o push dos elementos da fila
        self._data = Deque()

    def enqueue(self, value):
        self._data.push_back(value)

    def dequeue(self):
        return self._data.pop_front()

    def peek(self):
        return self._data.peek_front()

    def is_empty(self):
        return not self._data

    def clear(self):
        self._data.clear()


if __name__ == "__main__":
    queue_live = Queue()
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for elem in elements:
        queue_live.enqueue(elem)

    print("Fila:".rjust(18), queue_live._data)
    # Deque(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    print("Esta vazia:".rjust(18), queue_live.is_empty())  # False

    print("Exibe head:".rjust(18), queue_live.peek())  # 1

    print("Consome head:".rjust(18), queue_live.dequeue())  # 1
    print("")  # pula 1 linha
    print("Fila após dequeue:".rjust(18), queue_live._data)
    # Deque(2, 3, 4, 5, 6, 7, 8, 9, 10)
    print("Exibe head:".rjust(18), queue_live.peek())  # 2
    print("")  # pula 1 linha

    queue_live.clear()
    print("Exibe head:".rjust(18), queue_live.peek())  # None
    print("Esta vazia:".rjust(18), queue_live.is_empty())  # True
    print("Fila vazia:".rjust(18), queue_live._data)  # Deque()
