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
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});