-- UNION
-- Precisa da mesma quantidade de colunas !!!

SELECT first_name, last_name FROM sakila.actor
UNION -- remove valores duplicados
SELECT first_name, last_name FROM sakila.customer;

SELECT first_name, last_name FROM sakila.actor
UNION ALL -- não remove valores duplicados, une todos os dados
SELECT first_name, last_name FROM sakila.customer;

-- Para trazer quantidade diferentes de colunas, precisamos criar uma coluna 
-- fictícia, com um alias com o mesmo nome da coluna extra:
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 10)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 10)
ORDER BY first_name LIMIT 10;
-- colocar os SELECTS dentro de parênteses garante que a ordenação 
-- (ORDER BY) está sendo feita corretamente junto da União das duas tabelas!
-- Para fazer paginação faz-se uso do LIMIT nos dois SELECTS, onde será
-- unido o Limit de um + o limit de outro (somam-se os limits)!
-- O LIMIT 10 do ORDER BY garante, enfim, que só vnham os 10 primeiros valors da União!

-- Para trazer a proxima página da paginação (os pŕoximos 10)[Aumenta-se 
-- o número do LIMIT e OFFSET para dizer qual 'pǵina' deseja:
(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor LIMIT 20)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 20)
ORDER BY first_name LIMIT 10 OFFSET 10;