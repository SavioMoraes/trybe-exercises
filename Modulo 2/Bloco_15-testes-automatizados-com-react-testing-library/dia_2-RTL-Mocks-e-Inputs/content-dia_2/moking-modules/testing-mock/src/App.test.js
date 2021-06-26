const meuObjetoQualquer = { json: () => console.log('Oi!') }

meuObjetoQualquer.json();

const soma = 2 + 2;
const meuObjetoQualquer2AMissao = { minhaChaveFavorita: () => console.log((`Soma: ${soma}`)) }

meuObjetoQualquer2AMissao.minhaChaveFavorita();

// Este código só funfa no console do inspect do navegador
/*
const response = { json: () => Promise.resolve({ joke: 'Whiteboards... are remarkble'})}

response.json();
*/