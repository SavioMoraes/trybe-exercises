SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

-- mesma coisa que a de cima só qu utilizando o 'IN':
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

-- utilizando IN com números
SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);

