/*
Exercício 4:
O código abaixo está em JavaScript.
Calcule sua ordem de complexidade para um array de tamanho n.
*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.map(n => n * n)
       .filter(n => n % 2 === 0)
       .reduce((acc, n) => acc + n)


console.log(numbers)
console.log(numbers.map(n => n * n))
console.log(numbers.map(n => n * n).filter(n => n % 2 === 0))
console.log(numbers.map(n => n * n).filter(n => n % 2 === 0).reduce((acc, n) => acc + n))

/* As três funções iteram por todo o array, uma depois da outra.
A ordem de complexidade, portanto, seria O(n + n + n), ou O(3n),
mas dizemos O(n) para simplificar. */
