-- Exercícios Bloco 21.1 (Usando DB hr)
-- 1) Escreva uma query que exiba o maior salário da tabela:
-- SELECT * FROM hr.employees;
SELECT MAX(SALARY)
FROM hr.employees;

-- 2) Escreva uma query que exiba a diferença entre o maior e 
-- o menor salário:
-- SELECT MIN(SALARY) FROM hr.employees;
SELECT  MAX(SALARY) - MIN(SALARY) -- 24000.00 - 2100.00
FROM hr.employees;

-- 3) Escreva uma query que exiba a média salarial de cada JOB_ID, 
-- ordenando pela média salarial em ordem decrescente:
-- SELECT * FROM hr.employees;
SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

-- 4 Escreva uma query que exiba a quantidade de dinheiro necessária 
-- para realizar o pagamento de todas as pessoas funcionárias:
SELECT SUM(SALARY)
FROM hr.employees;

-- 5 Escreva uma query que exiba quatro informações: o maior salário, 
-- o menor salário, a soma de todos os salários e a média dos salários. 
-- Todos os valores devem ser formatados para ter apenas duas 
-- casas decimais:
SELECT MAX(SALARY),
    MIN(SALARY),
  SUM(SALARY),
    ROUND(AVG(SALARY), 2)
FROM hr.employees;

-- 6) Escreva uma query que exiba a quantidade de pessoas que trabalham 
-- como pessoas programadoras ( IT_PROG ):
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

-- 7) Escreva uma query que exiba a quantidade de dinheiro necessária 
-- para efetuar o pagamento de cada profissão ( JOB_ID ):
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;

-- 8) Utilizando a query anterior, faça as alterações para que 
-- seja exibido somente a quantidade de dinheiro necessária para 
-- cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ):
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

-- 9) Escreva uma query que exiba em ordem decrescente a média salarial 
-- de todos os cargos, exceto das pessoas programadoras ( IT_PROG ):
SELECT * FROM hr.employees;
SELECT job_id, AVG(salary) AS 'average_salary' -- não tinha o AS no gabarito e funcionava, acho mais assertivo colocar o AS!!! (?)
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

-- 10) Escreva um query que exiba média salarial e o número de 
-- funcionários de todos os departamentos com mais de dez funcionários. 
-- Dica: agrupe pelo department_id:
SELECT department_id,
    AVG(salary) AS 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

-- 11) Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que 
-- todos os telefones iniciados por 515 agora devem iniciar com 777:
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
-- SELECT * FROM hr.employees;

-- 12) Escreva uma query que só exiba as informações dos funcionários 
-- cujo o primeiro nome tenha oito ou mais caracteres:
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- 13) Escreva uma query que exiba as seguintes informações de cada 
-- funcionário: id , primeiro nome e ano no qual foi contratado 
-- (exiba somente o ano):
SELECT employee_id, first_name,
    LEFT(hire_date, 4) AS 'hire_year' -- para alias pode colocar o AS
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year' -- para alias também pode pssar o nome da coluna dirto sem o AS
FROM hr.employees;
    -- A função MID () extrai uma substring de uma string (começando em qualquer posição).
	-- Sintaxe:
			-- MID(string, start, length)
			-- FROM hr.employees;
            
-- 14) Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado.
SELECT * FROM hr.employees;
SELECT employee_id, first_name,
    RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    DAY(hire_date) 'hire_day'
FROM hr.employees;

-- 15) Escreva uma query que exiba as seguintes informações de cada 
-- funcionário: id , primeiro nome e mês no qual foi contratado 
-- (exiba somente o mês):
SELECT employee_id, first_name,
    SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MONTH(hire_date) 'hire_month'
FROM hr.employees;

-- 16) Escreva uma query que exiba os nomes dos funcionários em 
-- letra maiúscula:
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) -- para mauísculas pode-se usar a function 'UPPER()' ou
FROM hr.employees;
-- Or
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) -- para maiúsculas pode-se usar a function 'UCASE()'!!!
FROM hr.employees;

-- 17) Escreva uma query que exiba o sobrenome e a data de contratação 
-- de todos os funcionário contratados em julho de 1987:
SELECT * FROM hr.employees;
SELECT LAST_NAME _NAME, HIRE_DATE -- aqui '_NAME' é um alias e ficava mais legível se tivesse colocado o AS!!!
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';
-- Or
SELECT LAST_NAME AS _NAME, HIRE_DATE -- aqui coloquei o AS e ficou mais claro que '_NAME' é um alias!!!
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- 18) Escreva uma query que exiba as seguintes informações de cada 
-- funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias):
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) AS 'days_worked' -- optei por colocaro AS que poderia ser omitido!
FROM hr.employees;
