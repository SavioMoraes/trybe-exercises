# Exercício 1: Em um contexto de orientação a objetos, como podemos
# definir o que são mensagens e qual a sua importância?
# R: De acordo com o conteúdo, uma mensagem é uma das responsabilidades
# que um objeto pode ter, sendo utilizada para invocar um comportamento.
# Quando uma mensagem é enviada a um objeto, o mesmo pode ou não alterar
# seu estado. É importante, pois orientação a objetos é sobre objetos e
# sua comunicação. E essa comunicação entre os objetos é feita através
# de mensagens.

# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
# algumas partes de um software de geometria. Como poderíamos modelar um
# objeto retângulo?
# 🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte
# notação para descrever nossas abstrações:
"""
Nome da abstração
Quadrado

atributos/estados
- lado (tamanho)

comportamentos
- calcular area (lado * lado)
- calcular perímetro (4 * lado)
"""
#########################################################################
"""
Nome da abstração
Retângulo

atributos/estados
- base (tamanho)
- altura (tamanho)

comportamentos
- calcular area (base * altura)
- calcular perímetro (2 * (base + altura))
"""


class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


# Para testar!
retangulo_1 = Retangulo(5, 3)
print(retangulo_1.calcular_area())
print(retangulo_1.calcular_perimetro())


# Exercício 3: E como poderíamos definir um círculo? Qual seu nome,
# atributos e comportamentos?

"""
Nome da abstração
Círculo

atributos/estados
- PI
- raio

comportamentos
- calcular area (PI * raio * raio)
- calcular perímetro (2 * PI * raio)
"""


class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.raio * self.raio * self.PI

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


# Para testar!
circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())


# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de
# vendas de uma cafeteria. Como podemos abstrair um pedido composto por
# vários itens? Qual seu nome, atributos e comportamentos?

"""
Nome da abstração
Pedido

atributos/estados
- cliente
- itens consumidos
- forma de pagamento
- descontos

comportamentos
- calcular total
- calcular total com descontos

-----

Nome da abstração
Item

atributos/estados
- nome
- preço

comportamentos
- alterar preço
"""


class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens_consumidos, forma_de_pagar, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagar = forma_de_pagar
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


# Para testar!
sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 0.1)

print(pedido_mesa_1.calcular_total_com_descontos())


# Exercício 5: Notou que os pilares da orientação a objetos começam a
# manifestar a medida que fizemos nossos exercícios de modelagem?
# Que tal agora então modelarmos uma televisão?

# 🐦 Pense em como encapsular comportamentos como o estado
# (ligado/desligado), ou a taxa de variação do volume, que muda
# de TV para TV etc.

"""
Nome da abstração
Televisão

atributos/estados
- volume
- canal
- taxa de aumento do volume
- tamanho (não pode ser modificado)
- estado (ligada/desligada)

comportamentos
- aumentar volume
- diminuir volume
- modificar canal (novo canal deve ser fornecido)
- ligar/desligar TV (normalmente é um botão só que modifica o estado atual)
"""


class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada


# Para testar!

tv_da_sala = Televisao(42)
tv_da_sala.aumentar_volume()
print(tv_da_sala.volume)

tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala.volume)

tv_da_sala.modificar_canal(42)
print(tv_da_sala.canal)

tv_da_sala.ligar_ou_desligar()
print(tv_da_sala.ligada)
