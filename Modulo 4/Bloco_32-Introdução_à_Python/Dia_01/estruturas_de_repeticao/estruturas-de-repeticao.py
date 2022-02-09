# for

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# maneira normal de resolução do problema (restaurantes com nota > 3.0)
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# MANEIRA PYTÔNICA DE RESOLUÇÃO (restaurantes com nota > 3.0)
min_rating = 3.0
filtered_restaurants = [restaurant for restaurant in restaurants
                        if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Chamando os restaurantes apenas pelo 'name'
# prática equivalente ao MAP ou FILTER do JavaScript!!!
min_rating = 3.0
filtered_restaurants = [restaurant["name"] for restaurant in restaurants
                        if restaurant["nota"] > min_rating]
print(filtered_restaurants)

# percorrendo sequência numérica
for index in range(5):
    print(index)


# while

# sequência de Fibonacci:
# começa por 0 e 1 e cada elemento subsequente é à soma dos
# dois termos anteriores

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
