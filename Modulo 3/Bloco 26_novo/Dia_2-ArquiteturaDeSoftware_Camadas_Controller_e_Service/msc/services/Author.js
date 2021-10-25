const Author = require('../models/Author');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' '); // filtra pelos nomes desesrtuturados, para pegar o que der match em nome, nome do meio e último nome, porque tem gente que não tem nome do meio, garantindo que não aparece NULL como sobrenome do meio; depois o join passando um espaço para separar nome e sobrenomes...
  return {
    id,
    firstName,
    middleName,
    lastName,
    nome: fullName,
    fullName,
  }
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author);
}

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  if (!authorValid) return false;

  const { insertedId } = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName,
    lastName
  });
}

module.exports = {
  getAll,
  findById,
  create,
}