USE sakila;
SELECT * FROM sakila.actor;
CREATE TABLE clone_actor LIKE actor;
SELECT * FROM sakila.clone_actor;