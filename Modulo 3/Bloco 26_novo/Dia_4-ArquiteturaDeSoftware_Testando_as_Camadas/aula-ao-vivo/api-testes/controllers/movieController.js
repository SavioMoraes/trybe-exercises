const MovieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
  .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
  }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const getAll = async (req, res) => {
  const movies = await MovieService.getAll()
  res.status(200).json(movies)
}

module.exports = {
  create,
  getAll
};
