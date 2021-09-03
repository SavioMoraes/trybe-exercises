USE hr;

SELECT * FROM regions;

ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);

SELECT * FROM regions;
