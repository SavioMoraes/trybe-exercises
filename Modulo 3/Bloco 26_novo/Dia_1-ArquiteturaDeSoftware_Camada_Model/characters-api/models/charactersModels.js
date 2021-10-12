const connection = require('./mysqlConnection');

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
