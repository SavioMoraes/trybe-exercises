const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3030;

app.get('/', (req, res) => {
  res.send(`App funfando na porta ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
