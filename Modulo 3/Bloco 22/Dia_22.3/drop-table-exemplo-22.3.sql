drop table sakila.language; -- não permitido! Integridade Referencial!!!

-- Error Code: 3730. Cannot drop table 'language' referenced by a 
-- foreign key constraint 'fk_film_language' on table 'film'.

DROP TABLE sakila.noticia;

USE sakila;
SHOW TABLES;
