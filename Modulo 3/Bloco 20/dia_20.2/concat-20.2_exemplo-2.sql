-- 1
SELECT CONCAT (title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

-- 2
SELECT CONCAT (title, ' ', rating) AS Classificação FROM sakila.film;

-- 3
SELECT CONCAT (address, ' ', district) AS Endereço FROM sakila.address;