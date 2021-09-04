-- Desenvolvndo algumas funções
/* Exercício 1: Utilizando a tabela sakila.payment , monte uma function 
que retorna a quantidade total de pagamentos feitos até o momento por um 
determinado customer_id . */

USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

-- Como usar:

SELECT GetTotalPayments(2);