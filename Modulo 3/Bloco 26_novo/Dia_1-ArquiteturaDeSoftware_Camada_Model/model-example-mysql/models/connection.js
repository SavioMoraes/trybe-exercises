const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'savio',
  password: '23062005',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;