USE Pixar;
SET SQL_SAFE_UPDATES = 0;
-- 8
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- 9
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- 10
SELECT id, length_minutes FROM Movies
WHERE length_minutes < 100;
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos

 DELETE FROM BoxOffice
 WHERE movie_id IN (1, 6, 7, 8);
 
DELETE FROM Movies
WHERE length_minutes < 100;
