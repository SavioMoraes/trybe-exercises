const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();

  // res.status(200).render('Author/Author', { authors }); // .render para visualizar na camada view (html feito com ejs!)
  res.status(200).json(authors); // retornando formato json para visualizar no Postman
};

module.exports = {
  listAuthors,
};
