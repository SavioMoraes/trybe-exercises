-- USE sakila;
-- SELECT * FROM actor;
-- SELECT * FROM film_actor;
-- SELECT * FROM film;

CREATE VIEW film_info AS
	SELECT fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
    FROM sakila.film_actor AS fa
    INNER JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
    INNER JOIN sakila.film AS f ON fa.film_id = f.film_id
    ORDER BY actor;
    
SELECT * FROM film_info;