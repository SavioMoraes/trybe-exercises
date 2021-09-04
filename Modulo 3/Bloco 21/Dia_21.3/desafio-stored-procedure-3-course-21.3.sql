/* Desafios stored procedure:

Exercício 3: Monte uma procedure que receba o email de um cliente como 
parâmetro de entrada e diga se o cliente está ou não ativo, através de 
um parâmetro de saída. */

USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveClient(
    IN client_email VARCHAR(200),
    OUT isActive BOOL
)
BEGIN
    SET isActive = (
        SELECT active
        FROM sakila.customer
        WHERE email = client_email
    );
END $$

DELIMITER ;

-- Como usar:

SELECT @ActiveStatus;
CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;
