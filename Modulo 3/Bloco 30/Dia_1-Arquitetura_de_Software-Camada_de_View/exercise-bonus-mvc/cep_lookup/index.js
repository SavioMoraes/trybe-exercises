const express = require('express');
const bodyParser = require('body-parser');

const cepController = require('./controllers/cepController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', cepController.lookupCEP);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});