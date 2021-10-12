const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const charactersRoutes = require('./routes/charactersRoutes');

app.use('/characters', charactersRoutes);

app.listen(PORT, () => console.log(`Servidor na porta: ${PORT}`));