// Estrutura básica para uma aplicação com express (numarado):

const bodyParser = require('body-parser');
const express = require('express'); // (1) importando o express

const app = express(); // (2) instanciando / inicializando a aplicação express usando a função express()

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello world! App funfando!!! :)');
}); // (4) utilização dos métodos .get(), com 2 parâmetros: o primeiro é o caminho e o segundo uma arrow function com 2 parâmetros: 'req' é o objeto que encapsula todas as informações da requisição (do agente que fez a requisição para nossa app) e o 'res' é o objeto que vai tratar a resposta que a gente vai fornecer da nossa aplicação (o que vamos mandar de volta) e .send() - que serve para mostrar o conteúdo...

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionada com sucesso!`)
});

app.listen(3000, () => console.log('App rodando na porta 3000')); // (3) fazendo um bind, quer dizer, dizemos que a alicação vai pegar a porta 3000 do local host e deixar disponível para ser a URL da nossa aplicação.