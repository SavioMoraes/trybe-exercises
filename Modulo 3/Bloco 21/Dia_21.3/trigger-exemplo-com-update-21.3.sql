/* Exemplo de trigger para o UPDATE :
Considerando a tabela perfil, hora de montar um Trigger que define a data 
de atualização e o tipo de operação, quando algum registro for modificado. */

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;