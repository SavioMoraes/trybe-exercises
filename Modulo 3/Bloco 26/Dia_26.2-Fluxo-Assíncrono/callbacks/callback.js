// const fs = require('fs');

// Executando a leitura do arquivo com sucesso!!!
// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

// Executando a leitura do arquivo, forçando erro, substituindo o nome do arquivo, colocanso 'sss' no final!!!
// fs.readFile('./arquivosss.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

/* Exemplo de caalback HELL */
// const fs = require('fs');

// fs.readFile('file1.txt', (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('file2.txt', (err, file2Content) => {
//     if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//     console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//     fs.readFile('file3.txt', (err, file3Content) => {
//       if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//       console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
//     });
//   });
// });

// Começando a colocar várias CALLBACKS encapsuladas, podendo se aumentar e gerar uma CALLBACK HELL...!

// const fs = require('fs');

// fs.readFile('file1.txt', (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('file2.txt', (err, file2Content) => {
//     if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//     console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//     fs.readFile('file3.txt', (err, file3Content) => {
//       if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//       console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
//     });
//   });
// });

/* Resolvendo callback hells */
const fs = require('fs');

const file3Callback = (err, file3Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

  console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
};

const file2Callback = (err, file2Content) => {
  if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

  console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

  fs.readFile('file3.txt', file3Callback);
};

const file1Callback = (err, file1Content) => {
  if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

  console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', file2Callback);
};

fs.readFile('file1.txt', file1Callback);
