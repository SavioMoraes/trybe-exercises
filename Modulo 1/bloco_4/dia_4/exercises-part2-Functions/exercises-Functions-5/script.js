/*
    Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
      Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
        Valor esperado no retorno da função: 2 .
*/

function moreRepeatedNumber(integerArray) {
  let quant = 1;
  let newQuant = 0;
  let moreRepeated = 0;
  for(let index in integerArray) {
    newQuant = 0;
    for(let newIndex in integerArray) {
      if (integerArray[index] === integerArray[newIndex]) {
        newQuant += 1;
      }
      if (newQuant >= quant) {
        quant += 1;
        moreRepeated = integerArray[index];
      }
    }
  }
  return moreRepeated;
}
console.log(moreRepeatedNumber([2, 3, 2, 5, 8, 2, 3]));
