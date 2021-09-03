USE hr;

ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

SELECT * from locations;