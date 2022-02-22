# Exercício 7: Em um sistema de compras online, temos um código que
# efetua a compra do pedido. Este código possui code smells e precisa
# ser refatorado. Qual é o code smell ? Efetue a refatoração do código.


class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card


class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code
