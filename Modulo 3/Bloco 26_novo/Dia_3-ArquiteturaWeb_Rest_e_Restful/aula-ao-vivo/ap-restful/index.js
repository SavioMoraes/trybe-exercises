const express = require('express')
const bodyParser = require('body-parser')
const pessoaController = require('./controllers/pessoaController')

const app = express()
app.use(bodyParser.json())

app.use('/pessoas', pessoaController)

const PORT = 3000

app.listen(PORT, () => console.log(`Rodando aqui-> ${PORT}`))