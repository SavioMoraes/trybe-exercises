const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

const crypto = require('crypto');


// const authMiddleware = require('./authMiddleware');


app.use(express.json()); // !! não entrou em conflito com o bodyParser!!!
// app.use(authMiddleware);

/* Crie suas rotas aqui */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

//Exercício 01: Crie uma rota GET /ping. Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// Exercício 2: Crie uma rota POST /hello. 1º) Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" } 2º) Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

// Exercício 3: Crie uma rota POST /greetings. 1º) Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }. 2º) Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK. 3º) Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercício 04: Exercício 4 Crie uma rota PUT /users/:name/:age. Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ 'message': `Seu nome é ${name} e você tem ${age} anos de idade` })
}); // não consigo fazer funfar o nome e a idade na requiição!

// Exercício 05: Crie uma API de dados das personagens de Simpson
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

// app.use(function (err, req, res, next) {
//   res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
// });

app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));