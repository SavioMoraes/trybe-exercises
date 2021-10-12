const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const Author = require('./services/Author');
const Book = require('./models/Book');

// rota authors
app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not Found'});

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.create(first_name, middle_name, last_name);
  
  if (!author) return res.status(400).json({ message: 'Dados inválidos'});

  res.status(201).json(author)
});

// rota books
// utilize este código no Postman para utilizar o endoint abaixo...
// localhost:3000/books?author_id=1 
app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:_id', async (req, res) => {
  const { _id } = req.params;

  // const book = await Book.getById(id); // MYSQL: funfandooo!!!
  const book = await Book.findById(_id); // MongoDB: funfandooooo!!!!! Tem que passar _id ao invés de id! na rota e nos parâmetros! Além de ter que chamar o ObjectId do mongo em Book.js para poder pegar o _id do objeto do mongo!

  if (!book) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});