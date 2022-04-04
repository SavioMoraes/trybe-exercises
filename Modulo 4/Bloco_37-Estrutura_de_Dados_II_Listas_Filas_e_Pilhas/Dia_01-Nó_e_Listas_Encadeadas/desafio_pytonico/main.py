class Node:
    # Construtor
    def __init__(self, data=None, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next


# Função de utilidade para empurrar um nó no início da lista encadeada
def push(head, data):

    node = Node(data, None, head)

    # altera 'prev' do nó principal existente para apontar para o novo nó
    if head:
        head.prev = node

    # atualiza o ponteiro do head e o retorna
    head = node
    return head


# Função auxiliar para imprimir nós de uma lista encadeada
def printDDL(msg, head):

    print(msg, end='')
    while head:
        print(head.data, end=' —> ')
        head = head.next

    print('None')


# Função para trocar os ponteiros 'next' e 'prev' do nó fornecido
def swap(node):

    prev = node.prev
    node.prev = node.next
    node.next = prev


# Função para reverter uma lista encadeada
def reverseDDL(head):

    prev = None
    curr = head

    # percorre a lista
    while curr:
        # troca os ponteiros 'next' e 'prev' para o nó atual
        swap(curr)

        # atualiza o nó anterior antes de passar para o próximo nó
        prev = curr

        # move para o próximo nó na lista encadeada
        # (avança usando o ponteiro 'prev' já que os ponteiros 'next' e 'prev'
        # foram trocados)
        curr = curr.prev

    # atualiza o ponteiro do head para o último nó
    if prev:
        head = prev

    return head


if __name__ == '__main__':

    head = None
    for key in range(1, 6):
        head = push(head, key)

    printDDL('Original A: ', head)
    head = reverseDDL(head)
    printDDL('Reversed A: ', head)
