const readline = require('readline-sync'); // embora o nome do pacote seja 'readline-sync', podemos chamá-los (salvá-los numa constante) com qualquer nome!

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

// console.log('Hello, world!');
