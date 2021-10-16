const connection = require('./connection')
const { ObjectId } = require('mongodb')

const getAll = async () => {
  return connection().then((db) => db.collection('people').find().toArray())
}
  
const getById = async (id) => {
  if(!ObjectId.isValid(id))
      return null;

  return connection().then((db) => db.collection('people').findOne(ObjectId(id)))
}

const add = async ({ name, age }) => {
  const row = connection().then((db) => db.collection('people').insertOne({ name, age }))
  return { id: row.insertedId, name, age }
}

const update = async ({ id, name, age }) => {
  if(!ObjectId.isValid(id))
    return null;

  await connection().then((db) => db.collection('people').updateOne({ _id: ObjectId(id) }, { $set: { name, age }}))
  return { id, name, age }  
}

const exclude = async (id) => {
  if(!ObjectId.isValid(id))
      return null;

  await connection().then((db) => db.collection('people').deleteOne({ _id: ObjectId(id) }))
}


module.exports = { getAll, getById, add, update, exclude }