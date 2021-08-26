-- 1
SELECT 'This is SQL Exercise, Practice and Solution';
-- 2
SELECT 1 AS 'Coluna 1', 2 AS 'Coluna 2', 3 AS 'Coluna 3';
-- 3
SELECT 10 + 5;
-- 4
SELECT (5 * 2) + (100 / 10);
-- 5
SELECT * FROM Scientists.Scientists;
-- 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Horas de Trabalho' FROM Scientists.Projects;
-- 7
SELECT Name FROM Scientists.Scientists
ORDER BY Name ASC;
-- 8
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;
-- 9
SELECT CONCAT('O projeto ', Name, ' precidou de ', Hours, ' horas para ser concluído,') AS Resultado FROM Scientists.Projects;
-- 10
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;
-- 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;
-- 12
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;
-- 13
SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 1 OFFSET 1;
-- 14
SELECT * FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 5;
-- 15
SELECT 'Existem ', COUNT(Name), ' cientistas na tabela Scientists.' FROM Scientists.Scientists;
-- minha solução imprimiu correto, mas olha essa sintaxe abaixo, é mais completa...
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;