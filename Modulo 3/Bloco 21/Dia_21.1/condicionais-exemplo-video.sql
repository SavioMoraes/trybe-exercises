-- SELECT * FROM sakila.film;

-- Com 1 CONDIÇÃO

SELECT IF(rental_rate > 0.99, 'CARO', 'BARATO')
FROM sakila.film;

SELECT title, IF(rental_rate > 0.99, 'CARO', 'BARATO')
FROM sakila.film;

-- SELECT * FROM sakila.film;

-- Com VÁRIAS CONDIÇÕES:

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE 'Não Classificado'
END AS valor
FROM sakila.film
LIMIT 7;