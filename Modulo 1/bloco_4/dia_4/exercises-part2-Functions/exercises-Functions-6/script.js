/*
  Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
    Valor de teste: N = 5 .
      Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function sumPredecessors(N) {
  let amountOfPredecessors = 0;
  for (let index = 0; index <= N; index += 1) {
    amountOfPredecessors += index;
  }
  return amountOfPredecessors;
}

console.log(sumPredecessors(5));