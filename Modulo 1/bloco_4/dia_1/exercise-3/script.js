/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

let variableOne = 8;
let variableTwo = 3;
let variableThree = 5;

if (variableOne > variableTwo && variableOne > variableThree) {
  console.log(variableOne);
} else if (variableTwo > variableOne && variableTwo > variableThree) {
  console.log(variableTwo);
} else if (variableThree > variableOne && variableThree > variableTwo) {
  console.log(variableThree);
} else {
  console.log('Valores inválidos para compararação!')
}
