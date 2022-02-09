import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(50))


# outra alternativa utilizando o módulo 'math' - importação no início do cod


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(100))
