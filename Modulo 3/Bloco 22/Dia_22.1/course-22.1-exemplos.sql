-- Criar tabela com PK simples

--   DROP SCHEMA IF EXISTS Brasil;
--     CREATE SCHEMA Brasil;
--     USE Brasil;

--     CREATE TABLE cidades(
--         cidade VARCHAR(100) NOT NULL,
--         estado VARCHAR(10) NOT NULL,
--         populacao INTEGER,
--         CONSTRAINT PRIMARY KEY(cidade)
--     );
-- 
-- gera erro se inserir valores iguais   
--         INSERT INTO cidades(cidade, estado, populacao)
--     VALUES('Rio Claro','SP',185421),
--           ('Rio Claro','RJ',17216);
--           
-- Error Code: 1062. Duplicate entry 'Rio Claro' for key 'cidades.PRIMARY'

-- criar tabela com PK Composta:
    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        populacao INTEGER,
        CONSTRAINT PRIMARY KEY(cidade, estado)
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
          
     -- Apagar a versão antiga da tabela
     DROP TABLE cidades; -- executar em separado!
     CREATE TABLE cidades(
       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);

