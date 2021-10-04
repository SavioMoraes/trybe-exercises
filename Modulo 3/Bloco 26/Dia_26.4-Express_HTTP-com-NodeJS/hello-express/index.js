// const express = require('express');

// const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Mudança ocorrida ao recarregar a página ;)'); // 4
// }

// /* As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho. */

// const express = require('express');
// const app = express();

/* Rota com caminho '/', utilizando o método GET */
// app.get('/', function (req, res) {
//   res.send('hello world');
// });

/* Rota com caminho '/', utilizando o método POST */
// app.post('/', function (req, res) {
//   res.send('hello world');
// });

/* Rota com caminho '/', utilizando o método PUT */
// app.put('/', function (req, res) {
//   res.send('hello world');
// });

/* Rota com caminho '/', utilizando o método DELETE */
// app.delete('/', function (req, res) {
//   res.send('hello world');
// });

/* Rota com caminho '/' para qualquer método HTTP */
// app.all('/', function (req, res) {
//   res.send('hello world');
// });

/* Ou podemos encadear as requisições para evitar repetir o caminho */
// app
//   .route('/')
//   .get(function (req, res) {
//         // Requisições para rota GET `/` são resolvidas aqui!
//     res.send('hello world get');
//   })
//   .post(function (req, res) {
//         // Requisições para rota POST `/` são resolvidas aqui!
//     res.send('hello world post');
//   });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

/* index.js */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});