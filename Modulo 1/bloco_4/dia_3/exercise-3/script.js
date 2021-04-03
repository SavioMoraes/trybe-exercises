/* Valor esperado:

n = 5

    *
   **
  ***
 ****
*****

*/

let number = 5;

if (number > 0) {
  for (let index = 1; index <= number; index += 1) {
    console.log(' '.repeat(number - index) + '*'.repeat(index));
  }
} else
  console.log('Invalid number!');