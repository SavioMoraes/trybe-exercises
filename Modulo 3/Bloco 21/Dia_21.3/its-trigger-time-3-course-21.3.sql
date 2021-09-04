USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;