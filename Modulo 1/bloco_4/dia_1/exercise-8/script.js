/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let number1 = 5;
let number2 = 7;
let number3 = 1;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}