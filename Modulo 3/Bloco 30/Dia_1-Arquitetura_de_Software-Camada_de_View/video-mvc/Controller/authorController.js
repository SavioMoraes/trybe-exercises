const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();

  res.status(200).render('Author/Author', { authors }); // .render para visualizar na camada view (html feito com ejs!)
  // res.status(200).json(authors); // retornando formato json para visualizar no Postman
};

const newAuthor = async (req, res) => {
  res.render('Author/New', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!authorModel.isValid(first_name, middle_name, last_name)) {
    return res.render('Author/New', { message: 'Dados inválidos' });
  }

  await authorModel.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  newAuthor,
  createAuthor,
};
