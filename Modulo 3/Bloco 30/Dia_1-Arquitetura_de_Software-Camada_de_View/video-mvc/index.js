const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.status(200).json({ messge: 'Arquitetura MVC!' }));

app.listen(port, () => console.log(`\nUP ON PORT: ${port}!`));