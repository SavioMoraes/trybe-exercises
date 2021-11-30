const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/userController');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));