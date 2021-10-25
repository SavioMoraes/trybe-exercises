const router = require('express').Router()
const Pessoa = require('../models/pessoaModel')
const { StatusCodes } = require('http-status-codes')

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Pessoa.getById(id)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ erro: "Api deu pau..." })
  }
})

router.get('/', async (req, res) => {
  try {
    const result = await Pessoa.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ erro: "Api deu pau..." })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, age } = req.body
    const result = await Pessoa.add({ name, age })
    res.status(StatusCodes.CREATED).json(result)
  } catch (error) {
    res.status(500).json({ erro: "Api deu pau..." })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, age } = req.body

    const result = await Pessoa.update({ id, name, age })

    res.status(200).json(result)

  } catch (error) {
    res.status(500).json({ erro: "Api deu pau..." })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Pessoa.exclude(id)
    res.status(200).json({ message: "Registro deletado com sucesso!" })
  } catch (error) {
    res.status(500).json({ erro: "Api deu pau..." })
  }

})

module.exports = router