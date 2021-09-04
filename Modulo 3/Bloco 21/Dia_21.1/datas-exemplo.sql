-- Trabalhando com datas:
-- consultar a data e hora atuais:
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- Também podemos calcular a diferença em dias entre duas datas usando o DATEDIFF
-- e a diferença de tempo entre dois horários usando o TIMEDIFF .
-- Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado:

SELECT DATEDIFF('2020-01-31', '2020-01-01'); -- 30, ou seja, a primeira data é 30 dias depois da segunda

SELECT DATEDIFF('2020-01-01', '2020-01-31'); -- -30, ou seja, a primeira data é 30 dias antes da segunda

SELECT TIMEDIFF('08:30:10', '09:30:10'); -- -01:00:00, ou seja, há 1 hora de diferença entre os horários

SELECT TIMEDIFF('09:30:10', '08:30:10'); -- 01:00:00, ou seja, há 1 hora de diferença entre os horários

-- podemos extrair qualquer parte de uma data de uma coluna:
SELECT DATE(payment_date) FROM sakila.payment LIMIT 5; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment LIMIT 5; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment LIMIT 5; -- Mês
SELECT DAY(payment_date) FROM sakila.payment LIMIT 5; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment LIMIT 5; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment LIMIT 5; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment LIMIT 5; -- Segundo

-- ambém podemos usar CURRENT_DATE() e NOW() em conjunto com os comandos acima para encontrar resultados dinâmicos da seguinte maneira:
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual