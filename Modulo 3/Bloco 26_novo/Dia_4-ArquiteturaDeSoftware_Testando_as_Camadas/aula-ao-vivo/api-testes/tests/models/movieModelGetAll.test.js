// - Busca todos os filmes no BD
// -- quando não existe nenhum filme criado
//    - retorna um array
//    - o array está vazio
// -- quando existem filmes criados
//    - retorna um array
//    - o array não está vazio
//    - o array possui itens do tipo objeto
//    - tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"
const sinon = require('sinon')
const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')
const { expect } = require('chai')

const MovieModel = require('../../models/movieModel')


describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    const DBServer = new MongoMemoryServer()

    before(async () => {
      const MONGO_DB_URL_MOCK = await DBServer.getUri()
      const connectionMock = MongoClient.connect(MONGO_DB_URL_MOCK, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      })

      sinon.stub(MongoClient, 'connect').resolves(connectionMock)

    })

    after(async () => {
      MongoClient.connect.restore()
      await DBServer.stop()
    })

    it('retorna um array', async () => {
      const response = await MovieModel.getAll()
      expect(response).to.be.an('array')
    })
    
    it('o array está vazio', async () => {
      const response = await MovieModel.getAll()
      expect(response).to.be.empty
    })
  })

  describe('quando existem filmes criados', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MovieModel.getAll.restore()
    })

    it('retorna um array', async () => {
      const response = await MovieModel.getAll();
      expect(response).to.be.an('array');
    });
    it('o array não está vazio', async () => {
      const response = await MovieModel.getAll();
      expect(response).to.be.not.empty;
    });
    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MovieModel.getAll();
      expect(item).to.be.an('object');
    });
    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MovieModel.getAll();
      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
})
