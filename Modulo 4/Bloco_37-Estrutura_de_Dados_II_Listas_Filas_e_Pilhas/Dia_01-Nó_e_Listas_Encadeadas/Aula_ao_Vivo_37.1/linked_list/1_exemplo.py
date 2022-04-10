# Dada uma lista não vazia, unida individualmente
# com o nó principal, retorne o node do meio da lista.

from linked_list import LinkedList


def mid_element(linked_list: LinkedList):
    position = len(linked_list) // 2
    return linked_list.get_element_at(position)


if __name__ == "__main__":
    lecture_list = LinkedList()
    print("\nLista Vazia: ", lecture_list)
    print("Meio-> ", mid_element(lecture_list))  # None

    # Lista ligada atual = [1]
    lecture_list.insert_last(1)
    print("\nApós Inserir 1: ", lecture_list)
    print("Meio-> ", mid_element(lecture_list))  # Node(value=1 next=None)

    # Lista ligada atual = [1, 2, 3]:
    lecture_list.insert_last(2)
    lecture_list.insert_last(3)
    print("\nApós Inserir 2 e 3:", lecture_list)
    print("Meio-> ", mid_element(lecture_list))  # Node(value=2 next=3)

    # Lista ligada atual = [1, 2, 3, 4]
    lecture_list.insert_last(4)
    print("\nApós Inserir 4:", lecture_list)
    print(
        "Meio-> ", mid_element(lecture_list))

    # Percorre lista e exibe nó solicitado
    print("\nposiçaõ 0", lecture_list.get_element_at(0))
    print("posiçaõ 1", lecture_list.get_element_at(1))
    print("posiçaõ 2", lecture_list.get_element_at(2))
    print("posiçaõ 3", lecture_list.get_element_at(3))
    print("posiçaõ 4", lecture_list.get_element_at(4))
