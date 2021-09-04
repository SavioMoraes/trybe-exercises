/* Procedure com parâmetros de entrada-saida (IN-OUT):
O IN-OUT deve ser usado quando é necessário que um parâmetro possa ser 
modificado tanto antes como durante a execução de uma procedure.
Exemplo: Estamos gerando um novo nome para um filme, usando como base a 
variável film_name , que deve ser criada e passada como parâmetro para a 
procedure. O parâmetro sofrerá alterações dentro da procedure, podendo 
ser usado posteriormente com o novo nome. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;