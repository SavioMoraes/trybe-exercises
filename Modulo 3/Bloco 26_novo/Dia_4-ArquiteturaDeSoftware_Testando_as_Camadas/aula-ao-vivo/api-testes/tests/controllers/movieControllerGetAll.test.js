const sinon = require('sinon');
const { expect } = require('chai');
const MoviesServices = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
    describe('quando não existem filmes no banco de dados', async () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {};    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getAll').resolves([]);
      })
  
      after(() => {
        MoviesServices.getAll.restore();
      })
  
      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
      it('é chamado o método "json" passando um array', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
  
    });

    describe('quando existem filmes no banco de dados', async () => {
      const request = {};
      const response = {};
      const movies = [
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ];
    
    before(() => {
      request.body = {};
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getAll').resolves(movies);
    });
    
    after(() => {
      MoviesServices.getAll.restore();
    });
  
      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  
      it('é chamado o método "json" passando um array', async () => {
        await MoviesController.getAll(request, response);
  
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
    });
});