# O código busca o título dos elementos da página principal (mãe),
# mas não dá página principal, ele entra na url de cada elemento,
# e pega o título (h1) de cada página filha

import requests
from parsel import Selector


response = requests.get("http://books.toscrape.com/")
# print(response.status_code)
# print(response.text)
selector = Selector(text=response.text)
# print(selector)
# seleciona, na página, imagens com a classe thumbnail
# print(selector.css("img.thumbnail").getall())
# print(selector.css("img.thumbnail").getall()[0])
# print(selector.css("img.thumbnail").get())

# for thumbnail in selector.css("img.thumbnail").getall():
#     print(thumbnail)

# seleciona a div que contém o link para o conteúdo anunciado pela
# img, ou seja, mudar a página, ou, clicar no link...
# print(selector.css("div.image_container a").get())
# selecionando o atributo ::attr()
# print(selector.css("div.image_container a::attr(href)").get())
# thumb_url = selector.css("div.image_container a::attr(href)").get()
# print(thumb_url)
# thumbnail_request = requests.get("http://books.toscrape.com/" + thumb_url)
# print(thumbnail_request)
# thumb_selector = Selector(text=thumbnail_request.text)
# print(thumb_selector)
# book_title = thumb_selector.css("div.product_main h1")
# print(book_title.get())

thumbnail_url_selector = "div.image_container a::attr(href)"

# percorrer o array
for url in selector.css(thumbnail_url_selector).getall():
    thumbnail_request = requests.get("http://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())
