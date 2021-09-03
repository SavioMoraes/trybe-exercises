-- Exemplo de trigger para o INSERT:

/* Considerando a tabela perfil , hora de montar um Trigger que 
define a data de inserção e o tipo de operação, quando um novo registro 
é inserido. */

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;