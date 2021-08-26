CREATE DATABASE `Escola`;
USE Escola;

CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
-- 1
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

-- 2: reposta: 5

-- 3
SELECT DISTINCT Nome FROM Escola.Alunos;

-- 4: resposta: 4

-- 5
SELECT DISTINCT Idade FROM Escola.Alunos;

-- 6: resposta: 4