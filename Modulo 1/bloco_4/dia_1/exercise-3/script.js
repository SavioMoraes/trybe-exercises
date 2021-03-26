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
