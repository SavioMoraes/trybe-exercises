/*
  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
    Array de teste: [2, 3, 6, 7, 10, 1]; .
      Valor esperado no retorno da função: 4 .
*/

function highestValueIndex(integerArray) {
  let valueIndex = 0;
  for (let index in integerArray) {
    if (integerArray[index] > valueIndex) {
      valueIndex = index;
    }
  }
  return valueIndex;
}

console.log(highestValueIndex([2, 3, 6, 7, 10, 1]));