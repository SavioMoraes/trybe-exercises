/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let number1 = 5;
let number2 = 7;
let number3 = 1;

function checkForNumberPaired(number1, number2, number3) {
  if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForNumberPaired(1, 3, 5));
