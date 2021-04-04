/*
  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
      Valor esperado no retorno da função: 6 .
*/

function lowestValueIndex(integerArray) {
  let valueIndex = 0;
  for (let index in integerArray) {
    if (integerArray[index] < valueIndex) {
      valueIndex = index;
    }
  }
  return valueIndex;
}

console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));