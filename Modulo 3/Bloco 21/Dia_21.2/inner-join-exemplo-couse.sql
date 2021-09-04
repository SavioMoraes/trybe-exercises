-- INNER JOIN
-- A importância do uso do Alias!!!

USE sakila;

-- código sem alias, causa erro de ambiguidade na busca da coluna, que existe em mais de umma tabela
SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER join film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;

-- Error Code: 1052. Column 'actor_id' in field list is ambiguous

-- código com Alias
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- OBS.: A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabela:
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;