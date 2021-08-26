SELECT * FROM sakila.address;

-- SELECT * FROM sakila.address
-- ORDER BY address;

-- ordena crescente / ascendente
SELECT * FROM sakila.address
ORDER BY address ASC;

-- ordena decrescente /descedente
SELECT * FROM sakila.address
ORDER BY address DESC;

SELECT * FROM sakila.address
ORDER BY address, district;

SELECT * FROM sakila.address
ORDER BY address DESC, district;

SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;