/*sintaxe contendo uma função anônima*/
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

/*Arrow Functions*/
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

/*permite omissão do return e das chaves*/
const printName = () => "Lucas";
console.log(printName());

/*permite a omissão de parenteses em dois cenários: quando não passamos nenhum parâmetro ou quando passamos apenas 1 parâmetro*/
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

/*sintaxe com dois ou mais parâmetros*/
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));