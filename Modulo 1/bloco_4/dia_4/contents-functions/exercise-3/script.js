/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

function greaterThanThreeNumbers(variableOne, variableTwo, variableThree) {
  if (variableOne > variableTwo && variableOne > variableThree) {
    return variableOne;
  } else if (variableTwo > variableOne && variableTwo > variableThree) {
    return variableTwo;
  } else if (variableThree > variableOne && variableThree > variableTwo) {
    return variableThree;
  } else {
    return 'Valores inválidos para compararação!';
  }
}
console.log(greaterThanThreeNumbers(3, 7, 13));

