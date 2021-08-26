-- BETWEEN
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- usando BETWEEN com strings
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- usando BETWEEN com datas
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- comparando tempo de execução da query com Execution Plain

SELECT * FROM sakila.rental
WHERE customer_id IN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

SELECT * FROM sakila.rental
WHERE customer_id BETWEEN (1) AND (10);