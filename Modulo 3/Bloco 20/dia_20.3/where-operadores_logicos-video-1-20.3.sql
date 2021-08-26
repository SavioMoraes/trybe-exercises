USE sakila;
SELECT * FROM actor
WHERE last_name = 'DAVIS';

SELECT * FROM actor
WHERE actor_id = 101;

SELECT * FROM film
WHERE length > 50
ORDER BY length;

SELECT * FROM film
WHERE length < 50
ORDER BY length;

SELECT * FROM film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 20;

SELECT * FROM film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG13';

SELECT * FROM rental
WHERE return_date IS NULL;

SELECT * FROM staff
WHERE ative IS TRUE;

SELECT * FROM staff
WHERE ative IS FALSE;

SELECT * FROM staff
WHERE ative IS NOT TRUE;

SELECT * FROM staff
WHERE ative IS NULL;

SELECT * FROM address
WHERE address2 IS NOT NULL;

SELECT * FROM film
WHERE title NOT LIKE 'ACADEMY%';