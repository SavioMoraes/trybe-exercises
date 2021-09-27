/* Chamando o construtor através da palavra-chave 'new' */
// const p = new Promise((resolve, reject) => {
//   // Aqui é onde vamos realizar a lógica que precisamos
//   // para "tentar cumprir" a promessa
// });

/* Exemplo Promise */
// const fs = require('fs');

// function readFilePromise (fileName) {
//   return new Promise((resolve, reject) => {

//     fs.readFile(fileName, (err, content) => {
//       if (err) return reject(err);
//       resolve(content);
//     });

//   });
// }

// readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
//   .then((content) => { // Caso ela cumpra o que prometeu
//     console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
//   })
//   .catch((err) => { // Caso ela não cumpra o que prometeu
//     console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
//   });

/* Exemplo de Promise com .then() evitando callbacks hells */
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });