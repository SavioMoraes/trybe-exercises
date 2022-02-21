numero = input("Digite seu número: ")
print(type(numero))

# A função input retorna sempre strings, por isso a necessidade
# de converter para inteiro com o int().

meu_numero = 0


while meu_numero < 42:
    meu_numero += int(input("Digite seu número: "))


print("A soma de seus números superou 42! ")
print(type(meu_numero))
