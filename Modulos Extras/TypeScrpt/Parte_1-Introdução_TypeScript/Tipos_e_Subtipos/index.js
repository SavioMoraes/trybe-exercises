console.log('Tipos e Subtipos:');
//boolean : recebe verdadeiro ( true ) ou falso ( false ):
// cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
var yes = true;
// cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false
var no = false;
console.log(yes);
console.log(no);
// number : recebe valores numéricos e assim como no JavaScript
// todos são valores de ponto flutuante:
// cria uma variável de nome "x" e diz que o tipo é number mas
// não seta o valor isso não funciona com const
var x;
var y = 0;
var z = 123.456;
// string : recebe uma sequência de caracteres armazenados
//como unidades de código UTF-16 Unicode.
var s;
var empty = "";
var underscore = "_";
var abc = 'abc';
// console.log(s);
console.log(abc);
console.log(empty);
console.log(underscore);
// void : existe apenas para indicar a ausência de um valor,
//como em uma função sem valor retornado.
function sayHelloWorld() {
    console.log("Hello World!");
}
sayHelloWorld();
/*
Descobrir o por quê das variáveis declaradas com "let"
ficam marcadas pelo ESLint, mas com "var" não ficam...
Erro: 'Não é possível declarar novamente a variável de
escopo de bloco 'x'.ts(2451)'
*/
