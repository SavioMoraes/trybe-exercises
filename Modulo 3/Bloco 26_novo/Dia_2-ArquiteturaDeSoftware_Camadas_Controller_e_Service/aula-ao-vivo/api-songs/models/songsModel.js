const connection = require('./connection')

const songExists = async ({ name }) => {
  const db = await connection()
  const song = await db.collection('songs').findOne({ name: name })

  return song !== null
}

const getAll = async () => {
  const db = await connection()
  return db.collection('songs').find().toArray()
}

const create = async ({ name, album }) => {
  const db = await connection()
  const inserted = await db.collection('songs').insertOne({ name, album })
  return { _id: inserted.insertedId, name, album }
}

module.exports = { getAll, create, songExists }
