USE sakila;
-- 1
SELECT * FROM film
WHERE title LIKE '%ace%';
-- 2
SELECT * FROM film
WHERE description LIKE '%china';
-- 3
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
-- 4
SELECT * FROM film
WHERE title LIKE '___gon%';
-- 5
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- 6
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
-- 7
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';