SELECT * FROM sakila.city;
SELECT * FROM sakila.country;

-- INNER JOIN: busca por campos exatamente iguais dentro de duas tabelas...!

SELECT city.city, city.country_id, country.country -- selecionar as colunas, passando antes o alias para identificar de qual tabela vem!!!
FROM sakila.city AS city -- informa a primeira tabela a ser unida
INNER JOIN sakila.country AS country -- informa a segunda tabela a ser unida
ON city.country_id = country.country_id; -- country_id, pertecente nas duas tabelas, é o campo que faz esse relacionamento, sendo, na tabela city FK e na coutry PK

SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;