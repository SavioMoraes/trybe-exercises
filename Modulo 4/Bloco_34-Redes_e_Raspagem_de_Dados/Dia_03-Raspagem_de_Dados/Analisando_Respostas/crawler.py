from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
thumbnail_url_selector = "div.image_container a::attr(href)"

# percorrer o array
for url in selector.css(thumbnail_url_selector).getall():
    thumbnail_request = requests.get("http://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())
