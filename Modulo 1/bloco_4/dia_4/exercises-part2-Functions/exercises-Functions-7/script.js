/*
  Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
    Valor de teste: 'trybe' e 'be'
      Valor esperado no retorno da função: true
        verificaFimPalavra('trybe', 'be') ;
          Retorno esperado: true
            verificaFimPalavra('joaofernando', 'fernan') ;
              Retorno esperado: false
*/

function checkWord(word, ending) {
  if (word.slice(ending.length+1) === ending) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkWord('trybe', 'be'));
console.log(checkWord('joaofernando', 'fernan'));
