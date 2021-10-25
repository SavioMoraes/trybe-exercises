// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

// const { soma, subtracao, multiplicacao, divisao } = require('./calculo');

// const soma = (valorA, valorB) => valorA + valorB;
// const subtracao = (valorA, valorB) => valorA - valorB;
// const multiplicacao = (valorA, valorB) => valorA * valorB;
// const divisao = (valorA, valorB) => valorA / valorB;

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      soma(valorA, valorB);
      break;
    case "subtracao":
      subtracao(valorA, valorB);
      break;
    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;
    case "divisao":
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};

console.log(calculadora(1, 2, 'soma'));


module.exports = calculadora;

// Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações