// Bônus - Exercise 1

// Declara a variável 'numbers', que é um array de números
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
// Este programa coloca o array numbers em ordem crescente
// Percorre todo o array. Para comparar com o segundo 'for', fixa o primeiro index e faz toda a comparação do código dentro do bloco para depois incremantar mais 1 no index.
for (let index = 1; index < numbers.length; index += 1) {
  // percorre todo o array para comparar com o primeiro array.
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    // Testa se o valor do primeiro index do primeiro array for menor que o valor do primeiro index do array. Caso não seja menor, sobe para o segundo 'for' e passa a testar o valor do segundo index do segundo 'for', assim por diante, entrando no if se for menor. Quando se esgotar os valores de index do segundo array, o programa volta para o primeiro array, pega o valor do segundo índice e faz todo o teste de novo. 
    if (numbers[index] < numbers[secondIndex]) {
      // Declara a variável position que recebe o valor atual do índice do primeiro 'for'
      let position = numbers[index];
      // Faz a variável numbers na posição de índice atual, do primeiro 'for', receber o valor contido na variável numbers na posição índice do segundo 'for'
      numbers[index] = numbers[secondIndex];
      // Faz a variável numbers do segundo 'for' com a posição atual de índice, receber o valor contido na variável position.
      numbers[secondIndex] = position;

      // OBS: A variável 'position' é uma variável auxiliar utilizada para dar a possibilidade da realização da troca dos valores entre numbers[index] e numbers[secondIndex] 
    }
  }
}

// Imprime no console o array já colocado em ordem
console.log(numbers);
*/

// Bônus - Exercise 2

/*
// Este programa coloca o array numbers em ordem decrescente 
// Esse programa tem o desempenho similar ao anterior 'Bônus - exercise 1', tendo como única diferença, a inversão do sinal no teste do 'if', para testar se o valor contido no índice do primeiro for é maior que o do segundo for  e dessa forma realoca-os de forma decrescente no array numbers
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
*/

// Esse Programa apresenta como resultado os valores do array numbers multiplicados pelo valor de índice seguinte, se não tiver outro valor após, multiplica o valor do último índice por 2

// Declara o array 'newArray' como vazio
let newArray = [];

// Percorre todo o array
for (let index = 0; index < numbers.length; index += 1) {
  // Testa se o valor do índice atual tem algum valor no índice subsequente
  if (numbers[index + 1]) {
    // Caso o valor do índice atual tiver um valor no índice subsequente, multiplica um pelo outro 
    newArray.push(numbers[index] * numbers[index + 1]);
    // Caso o índice atual não tenha nenhum valor, no caso, índice subsequente
  } else {
    // Multiplica o valor do índice atual, que é o último do array, por 2
    newArray.push(numbers[index] * 2);
  }
}

// Imprime no console o array com as modificações desejadas pelo critério de negócio aplicado pelo programa
console.log(newArray);

