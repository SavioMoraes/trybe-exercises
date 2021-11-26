const express = require('express');
const { Store } = require('./models');

const app = express();

app.use(express.json());

const PORT = 3030;

app.get('/', (req, res) => {
  Store.findAll().then(dados => {
    res.status(200).json(dados)
  }).catch(e => {
    console.log(e.message);
    res.status(500).json({message: 'Algo deu errado!!!'})
  })
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
