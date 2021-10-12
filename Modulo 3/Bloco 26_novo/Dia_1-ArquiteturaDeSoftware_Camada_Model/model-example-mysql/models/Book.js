const connection = require('./connection');
const Author = require('./Author');

/* MYSQL */
// const getAll = async () => {
//   const [books] = await connection.execute('SELECT * FROM model_example.books;');

//   return books.map(({id, title, author_id}) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
// };


/* MYSQL */
// const getByAuthorId = async (authorId) => {
//   const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
//   const [books] = await connection.execute(query, [authorId]);

//   return books.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
// };

/* MYSQL */
// const getById = async (id) => {
//   const query = 'SELECT * FROM model_example.books WHERE id=?;'

//   const [books] = await connection.execute(query, [id]);

//   if (books.length === 0) return null;

//   return books.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }))[0];
// };


/* MYSQL */
// const isValid = async (title, authorId) => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

//   return true;
// };


/* MYSQL */
// const create = async (title, authorId) => connection.execute(
// 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
// [title, authorId],
// );

//----------------------------------------------------------------------------

// Utilizando MongoDB <<<---

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