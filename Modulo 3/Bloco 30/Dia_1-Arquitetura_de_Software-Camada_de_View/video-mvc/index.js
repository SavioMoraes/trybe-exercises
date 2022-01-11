const express = require('express');

const authorController = require('./Controller/authorController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './View')

app.get('/authors', authorController.listAuthors);

app.listen(port, () => console.log(`\nUP ON PORT: ${port}!`));