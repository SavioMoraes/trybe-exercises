/* Exemplo de trigger para o DELETE :
Considerando a tabela log_perfil , hora de criar um trigger 
que envia informações para essa tabela quando um registro da 
tabela perfil é excluído. */

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;