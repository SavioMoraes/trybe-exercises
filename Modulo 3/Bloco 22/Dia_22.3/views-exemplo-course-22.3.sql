/* VIEWS
-Um exemplo de uso:
--Suponha que a gerência quer ter uma maneira simples para sempre saber 
quem são os top 10 clientes que mais compram com a empresa. Pode-se 
criar uma view para resolver isso! */

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
SELECT * FROM top_10_customers;

DROP VIEW top_10_customers;