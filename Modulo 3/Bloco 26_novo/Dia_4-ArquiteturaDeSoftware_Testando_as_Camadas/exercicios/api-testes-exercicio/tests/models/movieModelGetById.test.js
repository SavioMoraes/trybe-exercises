const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');

describe('Busca apenas um filme no BD através do ID', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;

  const ID_EXAMPLE = '604cb554311d68f491ba5781';
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient
     .connect(URLMock, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     .then((conn) => conn.db('model_example'));

    
    sinon.stub(mongoConnection, 'getConnection')
      .resolves(connectionMock);
  });

  // after(() => {
  //   mongoConnection.getConnection.restore();
  // });

  describe('quando não existe um filme para o ID informado', () => {
    it('retorna "null"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme para o ID informado', () => {
    before(async () => {
      const moviesCollection = await connectionMock.db('model_example').collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(() => {
    mongoConnection.getConnection.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});