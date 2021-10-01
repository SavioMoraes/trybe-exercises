// console.log('Olá Turma 11');
// const nome = "Turma 11";
// console.log(nome);
// function teste() {
//   console.log('Olá Turma 11!');
// }

// teste();

// const func = require('./funcoes');

// console.log(func.soma(2, 4));
// console.log(func.sub(2, 4));
// console.log(func.mult(2, 4));

// const { sub } = require('./funcoes');
// console.log(sub(5, 3));

/* menos usual */
// const func = require('./funcoes').soma;
// console.log(func(5, 3));

const func = require('./funcoes');
const readline = require('readline-sync');
const fs = require('fs');

function chamaCalculo() {
  console.log('Vamos fazer umas contas?');

  const nome = readline.question('Qual seu nome? ')
  const n1 = readline.questionInt('Informe o primeiro numero: ');
  const n2 = readline.questionInt('Informe o segundo numero: ');
  const resultado = func.soma(n1, n2);
  
  const log = `Olá ${nome}, o resultado de sua conta foi: ${resultado}.`
  
  fs.writeFileSync("log.txt", log); // (write) escreve e altera o resultado
  const leitura = fs.readFileSync("./log.txt", 'utf8'); // (read) apenas leitura,não altera o resultado
  console.log(leitura);
}

chamaCalculo();