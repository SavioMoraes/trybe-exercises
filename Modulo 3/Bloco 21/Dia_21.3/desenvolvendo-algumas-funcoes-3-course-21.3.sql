-- Desvendando algumas funções:
/* Exercício 3: Crie uma function que receba uma determinada categoria 
de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a 
quantidade total de filmes registrados nessa categoria. */

USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*)
    FROM sakila.category c
    INNER JOIN sakila.film_category fc ON fc.category_id = c.category_id
    WHERE c.name = category INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

-- Como usar:

SELECT GetMovieAmountInCategory('Horror');