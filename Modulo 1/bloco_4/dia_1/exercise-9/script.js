/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let number1 = 2;
let number2 = 22;
let number3 = 222;

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}