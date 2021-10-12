const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: "localhost",
  user: "savio",
  password: "23062005",
  database: "live_lecture_26_1",
  port: 3306
});