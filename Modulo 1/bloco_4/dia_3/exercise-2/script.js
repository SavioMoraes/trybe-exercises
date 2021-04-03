/* Valor esperado:

n = 5

*
**
***
****
*****

*/

let number = 5;
for(let index = 1; index <= number; index += 1 ) {
  if (number > 0) {
    console.log('*'.repeat(index));
  } 
}