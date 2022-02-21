# Ocorrem durante a execução e acabam resultando em mensagem de erro!


print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
spam = "xablau"
print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
print("2" + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
