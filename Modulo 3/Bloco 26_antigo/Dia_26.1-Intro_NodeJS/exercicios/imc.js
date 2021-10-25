/* Exercício 01 */
// const peso = 86;
// const altura = 1.82;
// const imc = (peso / (altura * altura)).toFixed(2);
// console.log(imc);

/* Exercício 02:linha 7 package.json */

// /* Exercício 3 */
const readline = require('readline-sync');
// const peso = readline.questionInt('Qual o seu peso? (em kg) ');
// const altura = readline.questionInt('Qual a sua altura? (em cm) ');

// /* Exercício 4 */
// const peso = readline.questionFloat('Qual o seu peso? (em kg) ');

// /* A função Math.pow() O método pow () retorna o valor de x elevado à potência de y (x elevado a y). */
// /* Exercício 5 */
function calculaImc () {
  const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
  const altura = readline.questionInt('Qual a sua altura? (em cm) ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal'); // primeira maneira 
    return; // de retornar o resultado
  }

  if (imc >= 25 && imc < 30) {
    return console.log('Situação: Acima do peso (sobrepeso)'); // outra maneira de retornar o resultado dentro do return!
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

calculaImc();