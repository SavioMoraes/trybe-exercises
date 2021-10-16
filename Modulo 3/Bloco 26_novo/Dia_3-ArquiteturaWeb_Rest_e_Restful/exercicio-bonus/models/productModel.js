// Código aplicado com o MongoDB:
const mongodb = require('mongodb');
const connection = require('./connections');
const { ObjectId } = require('mongodb');

async function getAll() {
    const db = await connection();
    const products = await db.collection('products').find().toArray();
    return products;
  }

async function getById(id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  return db.collection('products').findOne(ObjectId(id));
}

async function add(name, brand) {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({name, brand});
  return addProduct;
}

async function exclude (id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const product = await getBytId(id);
  await db.collection('products').deleteOne({ _id: ObjectID(id) });
  return product;
}

async function update(id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const product = await db.collection('products').updateOne({ _id: ObjectID(id) }, { $set: name, brand });
  if(!product) return add(name, brand);
  return product;
}


module.exports = { add, getAll, getById, update, exclude };

// Código aplicado com o MySQL
// const connection = require('./connection');

// const add = async (name, brand) => {
//   try {
//     const [
//       result,
//     ] = await connection.query(
//       `INSERT INTO products (name, brand) VALUES (?, ?);`,
//       [name, brand]
//     );

//     return { id: result.insertId, name, brand };
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

// const getAll = async () => {
//   try {
//     const [rows] = await connection.query('SELECT * FROM products');
//     return rows;
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

// const getById = async (id) => {
//   try {
//     const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
//     if (!result.length) return null
//     return result[0];
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

// const update = async (id, name, brand) => {
//   try {
//     await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

// const exclude = async (id) => {
//   try {
//     const product = await getById(id);
//     if (!product) return {};
//     await connection.query('DELETE FROM products WHERE id = ?', [id])
//     return product;
//   } catch (err) {
//     console.error(err);
//     return process.exit(1);
//   }
// };

// module.exports = { add, getAll, getById, update, exclude };