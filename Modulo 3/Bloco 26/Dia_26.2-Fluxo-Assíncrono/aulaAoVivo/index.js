// callbacks
// const fs = require('fs');

// const dados = fs.readFile('./teste.txt', 'utf8', (erro, conteudo) => {
//   if(erro) return console.log(`Deu o erro': ${erro.code}`);
//   console.log(conteudo);
// });

// utilizando callback de forma dinâmica
// const callback = (erro, conteudo) => {
//     if(erro) return console.log(`Deu o erro': ${erro.code}`);
//     console.log(conteudo);
// }

// const dados = fs.readFile('./teste.txt', 'utf8', callback);
// const dados1 = fs.readFile('./teste1.txt', 'utf8', callback);
// const dados2 = fs.readFile('./teste2.txt', 'utf8', callback);

// Promises usando a lib 'util'
// const fs = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(fs.readFile); // 'util.promisify' transforma uma calback em uma Promise.

// readFilePromise('./teste.txt').then((response) => {
//   console.log(response.toString());
// }).catch(e => {
//   console.log(e.message)
// });

// Como pegar o erro em função sincrona com o 'try' 'catch'
// function soma() {
//   // return 3 + 5
//   throw new Error('Erro encontrado');
// }

// try {
//   console.log(soma());
// } catch (error) {
//   console.log(error.message);
// }

// Como pegar o erro em função Assíncrona com o 'then' / 'catch'
async function soma() {
  return 3 + 5
  throw new Error('Erro encontrado');
}

soma().then((res) => {
  console.log(res)
}).catch(e => {
  console.log(e.message)
})

/* 
* Padrão: promissificar as funções - 
* function sincrona try/catch, 
* function assincrona then/catch 
*/
