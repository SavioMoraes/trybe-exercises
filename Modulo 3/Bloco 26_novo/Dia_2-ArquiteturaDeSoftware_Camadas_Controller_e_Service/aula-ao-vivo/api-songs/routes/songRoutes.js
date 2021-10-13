const router = require('express').Router()
const songsController = require('../controllers/songsController')

router.get('/songs', songsController.getAllSongs)
router.post('/songs', songsController.createSong)

module.exports = router