/* Procedure com parâmetros de saida (OUT):
O parâmetro OUT é útil quando você precisa que algo seja avaliado ou 
encontrado dentro de uma query e te retorne esse valor para que algo 
adicional possa ser feito com ele.
Exemplo: Estamos recebendo aqui o título de um filme como valor de 
entrada e depois buscando dentro da procedure a duração média de um 
empréstimo daquele filme. Feito isso, ele é inserido em uma variável 
que pode ser usada posteriormente. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;