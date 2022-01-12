const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'savio',
  password: '23062005',
  database: 'cep_lookup'});

module.exports = connection;
