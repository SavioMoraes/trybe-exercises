-- GROUP BY:

SELECT first_name FROM sakila.actor; -- mostra todos os resultados

SELECT first_name FROM sakila.actor
GROUP BY first_name; -- agrupa resultados repetidos

-- Utilizando o GROUP BY com as Funções de Agregação!!!

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name; -- mostra os nomes e a quantidade de cada nome

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

