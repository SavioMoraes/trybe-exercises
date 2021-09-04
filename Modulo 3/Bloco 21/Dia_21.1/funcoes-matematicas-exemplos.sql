-- Funções Matemáticas
-- Operações Básicas:
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- Usando COLUNAS como base para Cálculos:
-- SELECT rental_duration, rental_rate FROM sakila.film;
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- Divisão de inteiros com DIV e como encontrar seus restos com o MOD:
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- Desafios com DIV e MOD:
-- 1
SELECT IF(15 MOD 2 = 0, 'PAR', 'ÍMPAR')
AS `Par ou Ímpar`;
SELECT IF(14 MOD 2 = 0, 'PAR', 'ÍMPAR')
AS `Par ou Ímpar`;

-- 2
SELECT 220 DIV 12
AS `Quantos grupos completos de 12 pessoas podemos levar ao cinema`;

-- 3
SELECT 220 MOD 12
AS `Ficou quantas pessoas de fora?`;

-- Arredondando Valores:
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- O arredondamento sempre para cima pode ser feito com o CEIL :
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
-- SELECT CEIL(10.78, 1); -- 11? Não Permitido: Error Code: 1582. Incorrect parameter count in the call to native function 'CEIL'

-- O arredondamento sempre para baixo pode ser feito com o FLOOR :
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- Exponenciação e Raiz Quadrada:
-- Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT , respectivamente.
-- Elevando um número X à potência Y usando a função POW :
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT :
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Gerando valores aleatórios:
-- Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND , em conjunto com as funções anteriores:
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))