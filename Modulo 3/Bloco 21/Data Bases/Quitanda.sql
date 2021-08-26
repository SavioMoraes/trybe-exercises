CREATE DATABASE IF NOT EXISTS quitanda;
USE quitanda;
CREATE TABLE products
(
  product_id INT,
  product_name VARCHAR(50) NOT NULL,
  product_value DECIMAL(6,2) NOT NULL,
  product_type VARCHAR(20) NOT NULL,
  product_brand VARCHAR(50) NOT NULL,
  is_active BIT(1)
);

INSERT INTO products values(1, 'Coca Cola Zero', 6.99, 'Bebida', 'Coca-Cola', 1);
INSERT INTO products values(2, 'Fanta', 5.99, 'Bebida', 'Coca-Cola', 1);
INSERT INTO products values(3, 'Fanta Uva', 5.99, 'Bebida', 'Coca-Cola', 1);
INSERT INTO products values(4, 'Kuat', 4.99, 'Bebida', 'Coca-Cola', 1);
INSERT INTO products values(5, 'Suco Tang Laranja', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(6, 'Suco Tang Morango', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(7, 'Suco Tang Caju', 1.99, 'Bebida', 'Tang', 0);
INSERT INTO products values(8, 'Suco Tang Acerola', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(9, 'Suco Tang Melância', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(10, 'Suco Tang Cajá', 1.99, 'Bebida', 'Tang', 0);
INSERT INTO products values(11, 'Suco Tang ', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(12, 'Suco Tang Limão', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(13, 'Bolacha Cream Cracker', 3.50, 'Merenda', 'Cream-Cracker', 1);
INSERT INTO products values(14, 'Bolacha recheada OREO', 2.95, 'Merenda', 'OREO', 1);
INSERT INTO products values(15, 'Bolacha Passa Tempo', 1.85, 'Merenda', 'Nestle', 1);
INSERT INTO products values(16, 'Bolacha Nescal', 3.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(17, 'Bolacha Nesfit', 4.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(18, 'Bolacha Moça', 2.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(19, 'Bolacha Bono', 2.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(20, 'Bolacha Bono', 3.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(21, 'Bolacha Bono', 4.99, 'Merenda', 'Nestle', 1);
INSERT INTO products values(22, 'Coca Cola Zero', 8.99, 'Bebida', 'Coca-Cola', 1);
INSERT INTO products values(23, 'Suco Tang Acerola', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(24, 'Suco Tang Acerola', 1.99, 'Bebida', 'Tang', 1);
INSERT INTO products values(25, 'Suco Tang Acerola', 1.99, 'Bebida', 'Tang', 1);




