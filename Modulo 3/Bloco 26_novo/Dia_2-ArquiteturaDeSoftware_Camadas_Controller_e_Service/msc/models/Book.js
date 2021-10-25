const connection = require('./connection');
const Author = require('./Author');

const { ObjectId } = require('mongodb');

const getAll = () => connection()
  .then((db) => db.collection('books').find({}).toArray());

const getByAuthorId = (authorId) => connection()
  .then((db) => db.collection('books').find({ author_id: Number(authorId) })
    .toArray());

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  
  if (!book) return null;
  
  return book;
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  // Aqui a única alteração é que `authorId` deve ser uma string de 24 caracteres, e não mais um número!!! [ERRADO!!!] -> não é o author_id que tem que ser uma string de length = 24, mas sim o id!!! como estamos criando elo author_id, a validação é, sim, se ele é um number
  // if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;
  if (!authorId || typeof authorId !== 'number') return false;


  return true;
}

const create = (title, authorId) => connection()
  .then((db) => db.collection('books').insertOne({ title, authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};

 // getById, substituída no mongoDB por findById!