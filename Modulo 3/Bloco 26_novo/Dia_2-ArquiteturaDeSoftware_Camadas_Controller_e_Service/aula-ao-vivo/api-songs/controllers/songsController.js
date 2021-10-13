const Song = require('../services/songService')

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.getAllSongs()
    res.status(200).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Aconteceu erro ao buscar os dados" })
  }
}

const createSong = async (req, res) => {
  try {
    const { name, album } = req.body
    const data = await Song.createNewSong({ name, album })
    if(data.erro_code && data.erro_code === 'MUSIC_EXISTS')
      return res.status(400).json({ message: "Essa música já esta cadastrada" })
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Aconteceu erro ao cadastrar o som" })
  }
}

module.exports = { getAllSongs, createSong }