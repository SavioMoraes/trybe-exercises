/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let number1 = 2;
let number2 = 22;
let number3 = 222;

function checkForNumberUnpaired(number1, number2, number3) {
  if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForNumberUnpaired(5, 8, 4));
