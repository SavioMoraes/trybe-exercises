const express = require('express')
const bodyParser = require('body-parser')
const songRoutes = require('./routes/songRoutes')

const app = express()
app.use(bodyParser.json())

app.use(songRoutes)

const PORT = 3001

app.listen(PORT, () => console.log(`Servidor roda aqui -> ${PORT}`))