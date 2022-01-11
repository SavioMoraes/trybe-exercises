const authorModel = require('../Model/authorModel');

const listAuthors = async (req, res) => {
  const authors = await authorModel.findAllAuthors();

  res.status(200).json(authors);
};

module.exports = {
  listAuthors,
};
