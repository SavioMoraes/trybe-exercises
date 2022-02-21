class User:  # entidade geral - definimos uma Classe
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`. Isso é
        uma particularidade de Python, vamos falar mais
        disso adiante!"""
        # __init__, trata-se  da sintaxe do método Constructor,
        # que tem que estar presente nas classes capazez de
        # criar Objetos!
        # esse método possui atributos (informações acerca dessa entidade):
        self.name = name  # atributo name
        self.email = email  # atributo email
        self.password = password  # atributo password

    def reset_password(self):  # isso é um método em POO
        print("Envia email de reset de senha")

    def diga_seu_nome(self):
        return self.name

# Métodos são as coisas que a entidade faz...
# Atributos são as coisas que a entidade sabe...


# Para invocar o método construtor, a sintaxe é:
# NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
valentino = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
lilica = User("Lilica", "lilica@tinytoons.com", "coelho")
perninha = User("Perninha", "perninha@tinytoons.com", "coelho123")
# entidade específica para nosso usuário
# criamos um Objeto, a partir da Classe definida!
# A variável `meu_user` contém o objeto criado pelo construtor da
# classe User!
print(lilica)  # contém um objeto do tipo User!
print(lilica.name)
print(lilica.email)
print(lilica.password)

retorno_do_metodo_diga_seu_nome = perninha.diga_seu_nome()
print(retorno_do_metodo_diga_seu_nome)

valentino.reset_password()
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

# CRIE ENTIDADES = Abstração!!!
# NÃO PRECISO SABER COMO FUNCIONA = Encapsulamento!!!

# ABSTRAÇÃO - 1º Pilar da Programação Orientada à Objetos
# ENCAPSULAMENTO - 2º Pilar da POO
