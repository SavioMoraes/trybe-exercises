const router = require('express').Router();
// const { getAllCharacters, insertCharacter } = require('../models/charactersModels'); // MYSQL
const { getAllCharacters, insertCharacter } = require('../models/charactersModelsMongo'); // MongoDB

router.get('/', async (req, res) => {
  const data = await getAllCharacters();
  res.status(200).json(data);
});

router.post('/', async (req, res) => {
  try {
    const { name, cartoon } = req.body;
  
    const data = await insertCharacter(name, cartoon);
  
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Problema ao inserir o registro"});
  }
});

module.exports = router;