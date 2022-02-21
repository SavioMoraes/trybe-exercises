class User:  # entidade geral - definimos uma Classe
    def __init__(self, name, email, password):
        # __init__, trata-se do método Constructor, que tem que estar
        # presente nas classes capazez de criar Objetos!
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de reset de senha")


# Para invocar o método construtor, a sintaxe é:
# NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
# entidade específica para nosso usuário
# criamos um Objeto, a partir da Classe definida!
# A variável `meu_user` contém o objeto criado pelo construtor da
# classe User!
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)

meu_user.reset_password()
# Se definimos numa classe uma função, podemos chamar ela
# a partir do objeto que criamos!

# Quando pedimos para um objeto fazer algo, dizemos que estamos
# enviando uma mensagem àquele objeto

# # class User:
# #     # Não preciso saber como a classe funciona, lalalalala

# #     def reset_password(self):
# #       # A classe tem essa função? Ótimo! Pra mim basta!


# # # Já sei o suficiente pra agir!
# # meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
# # meu_user.reset_password()
