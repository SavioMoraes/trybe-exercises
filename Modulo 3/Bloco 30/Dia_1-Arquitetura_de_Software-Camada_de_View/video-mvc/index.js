const express = require('express');

const authorController = require('./Controller/authorController');

const app = express();
const port = 3000;

app.get('/authors', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`\nUP ON PORT: ${port}!`));