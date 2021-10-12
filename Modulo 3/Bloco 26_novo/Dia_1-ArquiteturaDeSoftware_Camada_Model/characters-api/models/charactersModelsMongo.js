const connection = require('./mongodbConnection');

const getAllCharacters = async () => {
  return connection().then((db) => db.collection('characters').find().toArray());
}

const insertCharacter = async (name, cartoon) => {
  connection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => {id: result.insertedId, name, cartoon});
}

module.exports = {
  getAllCharacters,
  insertCharacter,
};
