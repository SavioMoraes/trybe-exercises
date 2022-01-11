const connection = require('./connection');

const findAllAuthors = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors');

  return authors;
};

module.exports = {
  findAllAuthors,
};
