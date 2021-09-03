/* Desafios stored procedure
Exercício 2: Monte uma procedure que receba como parâmetro o nome da 
categoria desejada em uma string e que exiba o id do filme , seu titulo, 
o id de sua categoria e o nome da categoria selecionada. Use as tabelas 
film , film_category e category para montar essa procedure. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN category VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film f
    INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

-- Como usar:

CALL FindMovieByCategory('Action');