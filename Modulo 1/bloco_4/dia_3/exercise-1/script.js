/*

Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/

let number = 5;
for(let index = 1; index <= number; index += 1) {
  if (number > 0) {
      console.log('*'.repeat(index));
  }else {
    console.log('Invalid Number!')
  }
}
