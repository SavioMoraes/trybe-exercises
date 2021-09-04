USE quitanda;

-- 1) Conatr quantas merendas e quantas bebida tem:
SELECT product_type, COUNT(*) AS qtd FROM products
GROUP BY product_type;

-- 2) Saber qual o produto mais barato de cada categoria de produto?
SELECT product_type, MIN(product_value) AS min_price FROM products
GROUP BY product_type;

-- 3) Agrupar produts por nome e verificar quantidades
-- para ver se temos produtos duplicados:
SELECT product_name, COUNT(*) AS qtd FROM products
GROUP BY product_name
HAVING qtd > 1;