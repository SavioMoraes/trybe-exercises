const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();

  return res.status(200).render('Author/Author', { authors }); // .render para visualizar na camada view (html feito com ejs!)
  // res.status(200).json(authors); // retornando formato json para visualizar no Postman
};

const newAuthor = async (req, res) => {
  return res.render('Author/New', { message: null });
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!authorModel.isValid(firstName, middleName, lastName)) {
    return res.render('Author/New', { message: 'Dados inválidos' });
  }

  await authorModel.create(firstName, middleName, lastName);
  return res.redirect('authors');
};

module.exports = {
  listAuthors,
  newAuthor,
  createAuthor,
};
