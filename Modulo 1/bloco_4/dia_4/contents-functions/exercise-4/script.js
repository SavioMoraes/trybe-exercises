/*Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

function positiveOrNegative(anyValue) {
  if (anyValue > 0) {
    return 'positive';
  } else if (anyValue < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(positiveOrNegative(5));
console.log(positiveOrNegative(-7));
console.log(positiveOrNegative(0));