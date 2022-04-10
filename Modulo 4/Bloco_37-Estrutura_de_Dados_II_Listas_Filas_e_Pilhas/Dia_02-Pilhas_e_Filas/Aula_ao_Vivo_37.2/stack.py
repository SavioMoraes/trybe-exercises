class Stack:
    def __init__(self):
        # usar estruturta de lista para guardar as informações da nossa pilha

        self._data = list()

    # método push para fazer o empilhamento e adicionar no topo da pilha
    def push(self, value):
        self._data.append(value)

    # pop para remover item da pilha, no caso o ultimo item o topo
    def pop(self):
        # se a pilha estiver vazia temos um tratamento para retornar none
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha conceito o python
        value = self._data[-1]
        # remove o valor do topo da pilha
        del self._data[-1]
        return value

    # peek nos mostra qual o valor do ultimo elemento da pilha
    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    # tamanho da minha pilha
    def size(self):
        return len(self._data)

    # indica se a pilha esta vazia ou não
    def is_empty(self):
        return not bool(self.size())

    # função que limpa a pilha / sera tudo no caso
    def clear(self):
        self._data.clear()

    # pega a nossa pilha e retorna num formato de string
    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"


if __name__ == '__main__':
    xablau = Stack()
    print(xablau)
    print(xablau.size())
    print(xablau.is_empty())

    elements = [4, 5, 6]
    for element in elements:
        xablau.push(element)
    print(xablau)
    print(xablau.size())
    print(xablau.peek())
    print(xablau.is_empty())
    xablau.pop()
    print(xablau)
    print(xablau.size())
    print(xablau.peek())
    xablau.clear()
    print(xablau)
    print(xablau.size())
    print(xablau.peek())
