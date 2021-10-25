/* Conectando NodeJS com MySQL */ 

// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   user: 'savio',
//   password: '23062005',
//   host: 'localhost',
//   database: 'model_example'
// });

// module.exports = connection;

/* Conectando NodeJS com MongoDB */

// exemplo da videoaula do course, FUNFANDOOOO!!!!!
const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit();
    });
};

// CONEXÃO COM MONGODB FUNFANDOOO!!!! (exemplo course!)
// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// let db = null;

// const connection = () => {
//     return db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//     db = conn.db('model_example');
//     return db;
//     })
// };

module.exports = connection;
