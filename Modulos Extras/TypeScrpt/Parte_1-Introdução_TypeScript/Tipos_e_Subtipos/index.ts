console.log('Tipos e Subtipos:');


//boolean : recebe verdadeiro ( true ) ou falso ( false ):

// cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
var yes: boolean = true;
// cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false
var no: boolean = false; 
console.log(yes);
console.log(no);


// number : recebe valores numéricos e assim como no JavaScript
// todos são valores de ponto flutuante:

// cria uma variável de nome "x" e diz que o tipo é number mas
// não seta o valor isso não funciona com const
var x: number;
var y: number = 0;
var z: number = 123.456;


// string : recebe uma sequência de caracteres armazenados
//como unidades de código UTF-16 Unicode.

var s: string;
var empty: string = "";
var underscore: string = "_"
var abc: string = 'abc';
// console.log(s);
console.log(abc);
console.log(empty);
console.log(underscore);


// void : existe apenas para indicar a ausência de um valor,
//como em uma função sem valor retornado.

function sayHelloWorld(): void {
  console.log("Hello World!");
}
sayHelloWorld()


// null e undefined : são subtipos de todos os outros tipos.

let nullValue = null;
let undefinedValue = undefined;


// Exemplo de declaração de variáveis utilizando inferência de tipo:

// Como visto antes podemos utilizar a inferência de tipo no TypeScript.
// Podemos declarar uma variável sem especificarmos explicitamente o tipo,
// e o compilador irá fazer a inferência do tipo através do valor passado
// para a variável.

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string


/*
Descobrir o por quê das variáveis declaradas com "let" 
ficam marcadas pelo ESLint, mas com "var" não ficam...
Erro: 'Não é possível declarar novamente a variável de
escopo de bloco 'x'.ts(2451)'
*/
