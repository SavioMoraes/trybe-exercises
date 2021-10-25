const Song = require('../models/songsModel')

const getAllSongs = async () => {
  const data = await Song.getAll()
  return data
}

const createNewSong = async ({ name, album }) => {
 const songExists = await Song.songExists({ name })
 if(songExists) return { erro_code: "MUSIC_EXISTS" }
 return await Song.create({ name, album })
}

module.exports = { getAllSongs, createNewSong }