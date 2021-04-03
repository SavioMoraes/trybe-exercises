/* Valor esperado:

n = 5

*
**
***
****
*****

*/

let n = 5;
for(let index = 1; index <= n; index += 1 ) {
  if (n > 1) {
      console.log('*'.repeat(n));
  } else {
      console.log('Invalid Number!')
  }
}