USE hr;

SELECT * FROM countries;

ALTER TABLE countries CHANGE COLUMN country_name country VARCHAR(40);

SELECT * FROM countries;
