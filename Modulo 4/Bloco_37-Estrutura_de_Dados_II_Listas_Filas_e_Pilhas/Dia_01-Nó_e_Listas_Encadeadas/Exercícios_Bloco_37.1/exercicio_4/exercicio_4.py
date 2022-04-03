from doubly_linked_list import DoublyLinkedList

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


if __name__ == "__main__":
    doubly = DoublyLinkedList()
    print("\nLista Vazia:\n", doubly)

    # Lista duplamente ligada atual = []:
    doubly.insert_last(1)
    doubly.insert_last(1)
    doubly.insert_last(2)
    print(doubly)
    doubly.delete
