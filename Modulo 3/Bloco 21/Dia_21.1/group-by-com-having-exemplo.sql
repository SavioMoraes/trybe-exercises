-- Filtrando Resultados do GROUP BY com HAVING

-- Podemos usar o HAVING para filtrar resultados agrupados, assim 
-- como usamos o SELECT...WHERE para filtrar resultados individuais.

-- A query a seguir busca o nome e a quantidade de nomes 
-- cadastrados na tabela sakila.actor e os agrupa por quantidade. 
-- Por fim, filtramos os resultados agrupados usando o HAVING, 
-- para que somente os nomes que estão cadastrados duas ou mais 
-- vezes sejam exibidos.

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de 
-- agregação, melhorando a leitura do resultado:
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING `nomes cadastrados` > 2; -- não funciona com aspas, mas funciona com tmplates strings
-- HAVING nomes_cadastrados > 2 -- solução alternativa  ao uso de aspas
        
-- É importante entender que quando usamos o HAVING estamos 
-- filtrando somente os resultados gerados após o GROUP BY ter
-- sido executado.
