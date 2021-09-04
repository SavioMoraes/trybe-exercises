-- Condicionais
-- Para Fixar

-- 1: Condicional simples (IF)
-- SELECT * FROM sakila.film;
SELECT film_id, title, IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheo o filme')
AS `conheço o filme?`
FROM sakila.film
LIMIT 5;

-- 2: Condicional composta (CASE/WHEN/THEN)
SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS `público-alvo`
FROM sakila.film
LIMIT 10;

Error Code: 1054. Unknown column 'ratind' in 'field list'
Error Code: 1054. Unknown column 'G' in 'field list'


