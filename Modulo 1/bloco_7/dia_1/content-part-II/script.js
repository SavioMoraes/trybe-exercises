/*concatenação antes do ES6*/
const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

/*criando string através de template literals*/
const myName = "Isabella"
console.log(`Welcome ${myName}!`);

/*quebra de linha com e sem o template literals*/
// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')