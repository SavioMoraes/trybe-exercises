import smtplib
import ssl


class User:  # entidade geral - definimos uma Classe
    def __init__(self, name, email, password):
        # o self é usado em classes no Python para indicar que você está
        # referenciando alguma coisa do próprio objeto (sejam eles atributos
        # ou métodos) - na verdade, o self é o próprio objeto em si.
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

    def diga_seu_nome(self):
        return self.name

    def reset_password(self):  # isso é um método em POO
        print("Envia email de reset de senha")
        """ Só com isso a função não irá funcionar! O email em
        questão não existe e costuma ser necessário configurar
        permissões no servidor de email para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! (Por segurança,
        crie uma nova conta de e-mail para testar).
        Por hora, basta entender a lógica aqui! """
        valentino = Mailer(
            "password_reset@teste.com",
            "myverysafepassword",
            self.email
        )
        valentino.send_email(
            "Reset your password",
            "Instruções para resetar a senha, com o link de resetar"
        )


class Mailer:
    def __init__(self, from_email, from_password, to_email):
        self.from_email = from_email
        self.from_password = from_password
        self.to_email = to_email

    def send_email(self, subject, message):
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


# Métodos são as coisas que a entidade faz...
# Atributos são as coisas que a entidade sabe...


# Para invocar o método construtor, a sintaxe é:
# NomeDaClasse(parametro 1, parametro 2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
valentino = User(
    "Valentino Trocatapa",
    "valentino@tinytoons.com",
    "grana123",
    # "password_reset@teste.com",
    # "myverysafepassword"
)
# lilica = User(
#     "Lilica",
#     "lilica@tinytoons.com",
#     "coelho",
#     "password_reset@teste.com",
#     "myverysafepassword"
# )
# perninha = User(
#     "Perninha",
#     "perninha@tinytoons.com",
#     "coelho123",
#     "password_reset@teste.com",
#     "myverysafepassword"
# )
# entidade específica para nosso usuário
# criamos um Objeto, a partir da Classe definida!
# A variável `meu_user` contém o objeto criado pelo construtor da
# classe User!
print(valentino)  # contém um objeto do tipo User!
print(valentino.name)
print(valentino.email)
print(valentino.password)

retorno_do_metodo_diga_seu_nome = valentino.diga_seu_nome()
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
