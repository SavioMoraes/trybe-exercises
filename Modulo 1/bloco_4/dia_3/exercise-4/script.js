/* Resultado esperado:

n = 5

  *
 ***
*****

*/

let numbers = 7;

for (let index = 1; index < numbers; index += 2) {
  console.log(' '.repeat((numbers/2)-index/2) + '*'.repeat(index));
}