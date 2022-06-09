from pymongo import MongoClient

# descomentar essas duas próximas linhas para exemplos
# até o gerenciamento de contexto com 'with'
client = MongoClient()
db = client.catalogue

# book representa um dado obtido na raspagem
# inserção de um documento (insert)
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
# client.close()  # fecha a conexão com o banco de dados

# inserção de múltiplos documentos (insert_many)
# db = client.catalogue
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
# client.close()  # fecha a conexão com o banco de dados

# buscas com find (todos) e find_one (primeiro que der match)
# busca um documento da coleção, sem filtros
# print(db.books.find_one())
# # busca utilizando filtros
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])
# client.close()

# cliente como gerenciador de contextos (with)
# with MongoClient() as client:
#     db = client.catalogue
#     for book in db.books.find({"title": {"$regex": "t"}}):
#         print(book["title"])
