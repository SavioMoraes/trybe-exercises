// Regras de negócio de nosso App:
/*
  * Haverá uma entidade chamada Author na aplicação;
  *A entidade vai conter os campos firstName , middleName e lastName . Note que os nomes estão em camelCase , enquanto as colunas do banco estão em snake_case ;
  *No código, um objeto contendo os campos mencionados acima será utilizado para representar um autor.
  *Existirão funções para ler e criar escritores do banco de dados;
  *A rota só irá interagir com os dados através da interface do model Author 
*/
const connection = require('./connection');

// Método para juntar nome e sobrenomes numa variável 'fullName':

// outra forma de se pegar os parâmetros:
/* 
  const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
*/

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' '); // filtra pelos nomes desesrtuturados, para pegar o que der match em nome, nome do meio e último nome, porque tem gente que não tem nome do meio, garantindo que não aparece NULL como sobrenome do meio; depois o join passando um espaço para separar nome e sobrenomes...
  return {
    id,
    firstName,
    middleName,
    lastName,
    nome: fullName, // criando uma nova chave!!!
    fullName // exibindo fullName sem criar nova chave!
  }
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  // const result = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors'); // essa linha traz o array correto com os dados do bd e também um outro array com métodos/dados de execução da própria querie, para trazer só o primeiro array com os dados corretos, desestruturamos em uma variável o nome do array/lista que queremos e retornamos ela, feito isso, conseguimos pegar apenas o primeiro elemento do array (que também é um array) e jogamos na variável authors e retornamos ela, como na linha abaixo:
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
    [id]
  );

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// codigo padrão
// const create = async (firstName, middleName, lastName) => {
//   connection.execute(
//     'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
//     [firstName, middleName, lastName]
//   );
// };


// código com menos linhas
const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
