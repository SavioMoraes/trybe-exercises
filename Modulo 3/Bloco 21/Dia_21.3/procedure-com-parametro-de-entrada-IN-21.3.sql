/* Procedure com parâmetros de entrada (IN):
Para criar procedures com funcionalidades mais elaboradas, podemos passar 
parâmetros de entrada. Ao definir um parâmetro do tipo IN , podemos usá-lo 
e modificá-lo dentro da nossa procedure.
Exemplo: Foi criada uma procedure que recebe como parâmetro uma sílaba 
(syllable) e busca na tabela actor todos atores quem contêm aquela sílaba 
no nome. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');
CALL ShowActorsWithSyllable('en');
