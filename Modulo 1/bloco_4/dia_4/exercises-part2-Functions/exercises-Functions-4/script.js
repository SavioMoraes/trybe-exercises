/*
  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
      Valor esperado no retorno da função: Fernanda .
*/

function checksBiggerName(namesArray) {
  let indexName = 0;
  let biggestName = namesArray[0].length;
  for (let index in namesArray) {
    if (biggestName < namesArray[index].length) {
      biggestName = namesArray[index].length;
      indexName = index;
    }
  }
  return namesArray[indexName];
}

console.log(checksBiggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
