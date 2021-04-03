/* Resultado esperado:
 Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
*/

var number = 7;

if (number > 0 && number % 2 === 1) {
  for (let i = 1; i <= number; i += 2) {
    var outterSpaces = (number - i) / 2;
    var innerSpaces = i - 2;

    i !== number
      ? i !== 1
        ? console.log(' '.repeat(outterSpaces) + '*' + ' '.repeat(innerSpaces) + '*')
        : console.log(' '.repeat(outterSpaces) + '*')
      : console.log('*'.repeat(i));
  }
} else console.log('Invalid number!');