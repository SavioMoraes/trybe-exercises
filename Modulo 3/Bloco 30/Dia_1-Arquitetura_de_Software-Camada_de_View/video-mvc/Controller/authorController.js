const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();

  res.status(200).render('Author/Author', { authors });
};

module.exports = {
  listAuthors,
};
