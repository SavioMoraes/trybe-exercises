const express = require('express');

const app = express(); // cria o servidor (1)

// simulando um db
const dbProducts = [
  { id: 1, name: 'Iphone 11', price: 5400.0 },
  { id: 2, name: 'Notebook Samsung', price: 7035.0 },
  { id: 3, name: 'Monitor Gamer LG curvo', price: 3335.0 },
  { id: 4, name: 'Microfone Gamer X-force', price: 1035.0 },
  { id: 5, name: 'Roteador TP-Link 1009', price: 535.0 },
];

// parâmetros via URL: o parâmetro id está sendo passado no endereço [:id]
app.get('/products/:id', (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const dados = dbProducts.find((p) => p.id === Number(id));

  if (!dados) return res.status(404).json({ message: 'Olha, não encontrei seu produto' });

  res.status(200).json(dados);
});

app.get('/products', (req, res) => {
  res.status(200).json(dbProducts);
});

// parâmetros via "Query String": nenhum parâmetro precisa ser passado após products, os parâmetros são passados na query string da requisição.
app.get('/products', (req, res) => {
  // console.log(req.query);
  if (req.query.id) {
    const { id } = req.query;
    const dados = dbProducts.find((p) => p.id === Number(id));
  }

  res.status(404).json({ message: 'Olha, não encontrei seu produto' });

  res.status(200).json(dados);
});


app.get('/', (req, res) => res.send('Fala turma 11')); // END-POINT: ponto de entrada de comunicação, sem ele não conseguimos visualizar as requisições e respostas feitas para o servidor na porta disponibilizada abaixo no primeiro parâmetro de app.listen.

app.post('/', (req, res) => {
  res.send('Entrou no POST');
});

app.put('/', (req, res) => {
  res.send('Entrou no PUT');
});

app.delete('/', (req, res) => {
  res.send('Entrou no DELETE');
});

app.listen(3001, () => console.log(`App ouvindo a porta 3001!`)); // disponibiliza o servidor numa porta (2)