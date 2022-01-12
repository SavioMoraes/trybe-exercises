const fetch = require('node-fetch');

const CEP_LA_API = 'http://cep.la';

const headers = {
  Accept: 'application/json',
};

const findCEP = async (cep) => {
  const response = await fetch(`${CEP_LA_API}/${cep}`, { headers });
  const cepData = await response.json();

  if (Array.isArray(cepData) && cepData.length === 0) {
    throw new Error('CEP não encontrado');
  }

  return cepData;
};

module.exports = {
  findCEP,
};