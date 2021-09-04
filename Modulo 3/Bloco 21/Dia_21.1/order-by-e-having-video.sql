SELECT * FROM sakila.address;

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
HAVING COUNT(*) > 5;