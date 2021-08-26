-- 1
SELECT * FROM sakila.film;
-- 2
SELECT title, release_year, rating FROM sakila.film;
-- 3
SELECT COUNT(*) FROM sakila.film;

-- 4
SELECT DISTINCT last_name FROM sakila.actor;
-- 5:
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
-- 6
SELECT last_name, first_name FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;

-- 7
SELECT name FROM sakila.language LIMIT 5 OFFSET 1;

-- 8
SELECT * FROM sakila.film;
-- 9
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;