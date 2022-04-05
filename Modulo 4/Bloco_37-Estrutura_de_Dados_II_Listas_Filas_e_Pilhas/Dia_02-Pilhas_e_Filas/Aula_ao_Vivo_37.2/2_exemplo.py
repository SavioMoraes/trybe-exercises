from stack import Stack


def is_valid(string):
    if len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:
        # seta os caracteres válidos.
        if char not in ["(", "[", "{", "}", ")", "]"]:
            return False
        # A lógica aqui formar pares de abertura e fechamento e
        # apagá-los em seguida, se sobrar algum, retirna False.
        # Caso os pares sejam formados e, na ordem correta, a
        # fica vazia e retorna True!
        if char in ["(", "[", "{"]:
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        else:
            return False

    return stack.is_empty()


print('Entrada: "()"', is_valid("()"))  # True
print('Entrada: "{)"', is_valid("{)"))  # False
print('Entrada: "()[]{}"', is_valid("()[]{}"))  # True
print('Entrada: "(]"', is_valid("(]"))  # False
print('Entrada: "([)]"', is_valid("([)]"))  # False
print('Entrada: "{[]}"', is_valid("{[]}"))  # True
print('Entrada: "{{}[][[[]]]}"', is_valid("{{}[][[[]]]}"))  # True
print('Entrada: "{{({})}}"', is_valid("{{({})}}"))  # True
print('Entrada: "[[[]]]"', is_valid("[[[]]]"))  # True
print('Entrada: "())"', is_valid("())"))  # False
