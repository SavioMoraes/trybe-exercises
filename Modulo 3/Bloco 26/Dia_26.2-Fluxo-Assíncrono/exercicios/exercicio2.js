function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
    
    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  //O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento. No  ES6, a sintaxe de classe permite a subclassificação de classes nativas e classes definidas pelo usuário; como resultado, os métodos estáticos pertencentes a classe, como Array.from, são "herdadas" por subclasses do Array e criam novas instâncias da subclasse, não do Array.
  // A propriedade length do método from() é 1. No ES2015, a sintaxe de class permite a definição de subclasses tanto internas quando definidas pelo usuário. Como resultado, métodos estáticos como Array.from() são "herdados" pelas subclasses de Array, e cria novas instâncias da subclasse, não de Array.
  
  doMath(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
  
  console.log(...randomNumbers);
}

callDoMath(); // precisa ser chamada para funcionar!!!!!!

// doMath(10, 10, 10)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))
