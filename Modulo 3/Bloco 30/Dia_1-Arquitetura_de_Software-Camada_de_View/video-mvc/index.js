const express = require('express');
const bodyParser = require('body-parser');

const authorController = require('./Controller/authorController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3232;

app.set('view engine', 'ejs');
app.set('views', './View')

app.get('/authors', authorController.listAuthors);

app.get('/authors/new', authorController.newAuthor);
app.post('/authors', authorController.createAuthor);

app.listen(port, () => console.log(`\nUP ON PORT: ${port}!`));