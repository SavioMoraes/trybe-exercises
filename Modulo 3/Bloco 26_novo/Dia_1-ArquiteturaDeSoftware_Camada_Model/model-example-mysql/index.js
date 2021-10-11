const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const Author = require('./models/Author');
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

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos'});

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: "Autor criado com sucesso!"})
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

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

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