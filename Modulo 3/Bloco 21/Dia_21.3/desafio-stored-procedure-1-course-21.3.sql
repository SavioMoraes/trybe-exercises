/* Desafios stored procedure:

Exercício 1: Monte uma procedure que exiba os 10 atores mais populares, 
baseado em sua quantidade de filmes. Essa procedure não deve receber 
parâmetros de entrada ou saída e, quando chamada, deve exibir o id do 
ator ou atriz e a quantidade de filmes atuados. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Como usar:

CALL ShowTop10Actors();