-- use sakila;
-- SELECT * from film;
-- SELECT * from film_category;
-- SELECT * from category;

CREATE VIEW film_with_categories AS
	SELECT f.title, fc.category_id, c.name
	FROM sakila.film_category AS fc
	INNER JOIN sakila.film AS f ON fc.film_id = f.film_id
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
	ORDER BY f.title;
    
SELECT * FROM film_with_categories;
