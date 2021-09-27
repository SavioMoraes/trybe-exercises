// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('', 'Modificado com async await');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()

// sobrescreve o que está escrito no arquivo, caso exista
// cria um novo arquivo, caso não exista
// para gerar o erro pode-se passar o primeiro parâmetro do 'fs.writeFile como uma string vazia, aí ele não identica caminho, nome e formato e dá error!

/* Utilizando Flags no parâmetro */

const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado, existem outras - pesquisar!
fs.writeFile('./meu-arquivo-teste.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('erro, arquivo existente!');
  });
