/* EXISTS: retorna o dados da Tabela A onde existe um relacionamento com 
os dados da Tabela B.
*/

SELECT * FROM hotel.Customers;
SELECT * FROM hotel.Reservations;

SELECT * FROM hotel.Customers AS c
WHERE EXISTS (
	SELECT * FROM hotel.Reservations
    WHERE c.CustomerId	= Reservations.CustomerId
);

-- Negação do EXISTS:
SELECT * FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.Reservations
    WHERE c.CustomerId	= Reservations.CustomerId
);

SELECT * FROM praticando.manufacturers;
SELECT * FROM praticando.products;

/* Quero saber se existe algum fornecedor que não possui produtos cadastrados
no Banco de Dados. */

SELECT `Name` FROM praticando.manufacturers AS m -- Template Strings por ser palavra reservada
WHERE NOT EXISTS (
	SELECT * FROM praticando.products
    WHERE Manufacturer = m.Code
);

/* Quero saber os Fornecedores com produtos cadastrados
no Banco de Dados. */

SELECT `Name` FROM praticando.manufacturers AS m -- Template Strings por ser palavra reservada
WHERE EXISTS (
	SELECT * FROM praticando.products
    WHERE Manufacturer = m.Code
);