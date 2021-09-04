-- Vídeo Couse INDEX
/*
## INDEX ##
- UMA MANEIRA DE ESTRUTURAR OS DADOS DE UMA MANEIRA MAIS EFICIENTE PARA
QUE SEJAM ENCONTRADOS MAIS RAPIDAMENTE!

##TIPOS:

- PRIMARY KEY
- UNIQUE
- INDEX
- FULLTEXT INDEX
*/

-- 1) Pode-se criar INDEX em BDs/Tables já existentes ou
 
-- 2) Criar o INDEX na criação do BD/TABLE:

CREATE DATABASE IF NOT EXISTS pizzaria;
USE pizzaria;

CREATE TABLE pizzas(
	pizza_id INT PRIMARY KEY,
    sabor VARCHAR(100),
    preco DECIMAL(5, 2),
    INDEX sabor_index(sabor)
) ENGINE=InnoDB;

SELECT * FROM pizzaria.pizzas;

-- 3) Pode criar um INDEX na hora de alterar uma tabela (ALTER TABLE)
-- ALTER TABLE nome_tabela
-- ADD INDEX nome_index(nome_coluna)

