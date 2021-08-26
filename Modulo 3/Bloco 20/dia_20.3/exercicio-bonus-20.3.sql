-- Exercício Bônus
USE Scientists;

-- 1
SELECT * FROM Scientists
WHERE Name LIKE "%e%";

-- 2
SELECT Name FROM Projects
WHERE Code LIKE "A%" ORDER BY Name;

-- 3
SELECT Code, Name FROM Projects
WHERE Code LIKE "%3%" ORDER BY Name;

-- 4
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

-- 5
SELECT * FROM Projects
WHERE Hours > 500;

-- 6
SELECT * FROM Projects WHERE Hours > 250 AND Hours < 800;
-- ou
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;

-- 7
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';

-- 8
SELECT Name FROM Projects
WHERE Code LIKE '%H%';
