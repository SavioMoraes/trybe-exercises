const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: "localhost",
  user: "savio",
  password: "23062005",
  database: "live_lecture_26_1",
  port: 3306
});

const getAllCharacters = async () => {
  const [result] = await connection.execute('SELECT * FROM characters;');
  return result;
}

const insertCharacter = async (name, cartoon) => {
  const [result] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)', [name, cartoon]);

  const serialize = {
    id: result.insertId,
    name,
    cartoon,
  }
  return serialize;
}

module.exports = {
  getAllCharacters,
  insertCharacter,
};
