const { default: axios } = require('axios');

async function validaeconsultaCEP() {
  const cep = '46.860-000';

  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  const valida = regexCEP.test(cep);

  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;

    const request = await axios.get(URL);
    console.log(request.data);
  }
}

validaeconsultaCEP();
