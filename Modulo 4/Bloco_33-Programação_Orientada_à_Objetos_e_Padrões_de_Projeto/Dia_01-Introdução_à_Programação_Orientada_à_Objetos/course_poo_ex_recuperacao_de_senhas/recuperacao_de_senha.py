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
