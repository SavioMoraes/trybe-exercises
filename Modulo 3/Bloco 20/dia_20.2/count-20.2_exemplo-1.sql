SELECT * FROM sakila.actor;
SELECT COUNT(*) FROM sakila.actor;
SELECT COUNT(first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;

SELECT COUNT(*) FROM sakila.address;
SELECT COUNT(address2) FROM sakila.address;

SELECT district FROM sakila.address;
SELECT COUNT(district) FROM sakila.address;

SELECT COUNT(district) FROM sakila.address
WHERE district = 'Alberta';

SELECT COUNT(address2) FROM sakila.address
WHERE address2 = '';