-- 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- 2
SELECT first_name FROM sakila.customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

-- 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating = 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC
LIMIT 100;

-- 4
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active = 1 AND store_id = 1;

-- 5
SELECT * FROM sakila.customer
WHERE active = 0 AND store_id = 1;

-- 6
SELECT title FROM sakila.film
WHERE rating = 'NC-17' 
ORDER BY rental_rate, title
LIMIT 50;