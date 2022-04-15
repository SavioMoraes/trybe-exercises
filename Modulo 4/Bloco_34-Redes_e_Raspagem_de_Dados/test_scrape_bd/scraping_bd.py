# OBS: o bd só foi criado quando o comando foi
# dado com o mongo desconectado! Ou foi delay,
# mas só criou desligado e fazendo inserção.
# as atualizações das novas inserções funfam
# com ele conectado!!!

from pymongo import MongoClient


# client = MongoClient("mongodb://localhost:27017/")
# db = client.scraping
# book representa um dado obtido na raspagem
# book = {
#     "title": "A Light in the Attic",
# }
# document_id = db.books.insert_one(book).inserted_id
# print(document_id)
# client.close()

# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)
# client.close()


with MongoClient("mongodb://localhost:27017/") as client:
    db = client.scraping
    for book in db.books.find({"title": {"$regex": "vel", "$options": "i"}}):
        print(book["title"])

# $regex: busca por parte da palavra...
# $options: i - ignora case sensitive
