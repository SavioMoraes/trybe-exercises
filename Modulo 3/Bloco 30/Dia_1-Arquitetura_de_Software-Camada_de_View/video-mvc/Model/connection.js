const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'savio',
  password: '23062005',
  database: 'example_mvc',
});

module.exports = connection;