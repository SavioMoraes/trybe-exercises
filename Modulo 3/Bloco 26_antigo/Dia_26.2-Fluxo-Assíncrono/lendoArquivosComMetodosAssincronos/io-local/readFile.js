const fs = require('fs');

// forçando erro passando nome errado do arquivo!
// const nomeDoArquivo = 'my-arquivo.txt';

// funfando com nome correto do arquivo!
const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Termina o processo com o especificado code. Se omitido, a saída usa o código de 'sucesso' 0. Para sair com um código de 'falha' use: process.exit(1); O shell que executou o nó deve ver o código de saída como 1.
    // https://stackoverflow.com/questions/5266152/how-to-exit-in-node-js
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

/* !!!! Caramba !!!!! */
// o arquivo 'meu-arquivo.txt' tem que estar antes do 'package.json' e do 'readFile.js' para funcionar...