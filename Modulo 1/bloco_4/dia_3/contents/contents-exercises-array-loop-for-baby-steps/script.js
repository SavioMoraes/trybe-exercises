let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercise 1

/*
// percorre o array
for (let i = 0; i < numbers.length; i += 1) {
  // imprime todos os valores do array
  console.log(numbers[i]);
}
*/

// Exercise 2

/*
// inicia a variável sum (soma) com zero (0)
let sum = 0;
// percorre todo o array
for (let i = 0; i < numbers.length; i += 1) {
  // soma todos os valores do array, adicioanando a variável sum a cada interação o valor correspondente ao index.
  sum += numbers[i];
}
// imprime a soma de todos os valores do array 
console.log(sum)
*/

// Exercise 3

/*
// inicia a variável sum (soma) com zero
let sum = 0;
// percorre todo o array
for (let i = 0; i < numbers.length; i += 1) {
  // soma todos os valores do array
  sum += numbers[i];
}
// declara a variável averege que vai conter a media dos valores do array
let average = sum / numbers.length;

// imprime a media dos valores do array
console.log(average);
*/

// Exercise 4

/*
// inicia a variável sum (soma) com zero
let sum = 0;
// percorre todo o array
for (let i = 0; i < numbers.length; i += 1) {
  // soma todos os valores do array
  sum += numbers[i];
}

let average = sum / numbers.length;

// imprime a media dos valores do array
console.log(average);

// testa se a media for maior que 20
if (average > 20) {
  // imprime no console valor maior que 20
  console.log('valor maior que 20');
  // caso contrário, ou seja, menor ou igual a 20
} else {
  // imprime no console menor ou igual a 20
  console.log('valor menor ou igual a 20');
}
*/

// Exercise 5

/*
// delara a variável higherValue (maiorValor) com zero
let higherValue = 0;

// percorre todo o array 
for (let i = 0; i < numbers.length; i += 1) {
  // testa se o primeiro valor numbers[i], de index (i) = 0 é maior que higherValue
  if (numbers[i] > higherValue) {
    // caso positivo, higherValue recebe o valor de numbers[i]
    higherValue = numbers[i];
  }
}

// imprime no console o maior valor
console.log(higherValue);
*/

// Exercise 6

/*
// declara a variável oddValues (valores ímpares) iniciando de zero
let oddValues = 0;

// percorre todo o array
for (let i = 0; i < numbers.length; i += 1) {
  // testa se o resto da divisão do valor no index em questão é diferente de zero, caso positivo
  if (numbers[i] % 2 !== 0) {
    // adiciona 1 à variável oddValues
    oddValues += 1;
  }
}

// testa se a variável oddValues é igual a zero
if (oddValues === 0) {
  // caso seja igual a zero, imprime no console 'nenhum valor ímpar encontrado'
  console.log('nenhum valor ímpar encontrado');
  // caso seja diferente de zero
} else {
  // imprime no console a quntidade de números ímpares 
  console.log(oddValues);
}
*/

// Exercise 7

/*
// cria a variável lowerValue (menor valor) iniciando por um valor alto que, provavelmente terá um valor menor
let lowerValue = 10000;

// percorre todo o array
for (let i = 0; i < numbers.length; i += 1) {
  // testa se o valor no index atual do loop é menor que lowerValue
  if (numbers[i] < lowerValue) {
    // caso o numero seja menor que lowerValue, lowerValue recebe o valor do numbres[i]
    lowerValue = numbers[i];
  }
}

// imprime no console o menor valor contido no array
console.log(lowerValue);
*/

// Exercise 8

// declara um array 'result' vazio
result = []

// percorre todo o array desde 1 até 25
for (i = 1; i <= 25; i += 1) {
  // cria e coloca no array valores de 1 a 25. Iniciando de 1 e incrementando 1 até 25
  result.push(i);
}

// imprime no console p array 'result'
console.log(result);


// Exercise 9

// percorre todo o array desde 1 até 25
for (let i = 0; i < result.length; i += 1) {
  // imprime no console o resultado de todo valor contido no array, dividido por 2
  console.log(result[i] / 2);
};
