salary = 15000
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

print(position)

# Other case

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
print(from_to[key])
