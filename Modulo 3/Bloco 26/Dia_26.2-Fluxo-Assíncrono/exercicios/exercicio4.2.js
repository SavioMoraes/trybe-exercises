// const fs = require('fs').promises;

// async function getSimpsonById(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

//   if (!chosenSimpson) {
//     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
//       * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
//       * tendo como motivo o que passarmos para o `throw`.
//       * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
//       */
//     throw new Error('id não encontrado');
//   }

//   /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
//       * `return` aciona o fluxo de sucesso e resolve a Promise.
//       * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
//       * dentro do executor de uma Promise.
//       */
//   return chosenSimpson;
// }

// getSimpsonById('1');
/* Solucao Rodrigo Ruan */
const fs = require('fs').promises;

function showAllCharacters() {
  return fs.readFile('simpsons.json', 'utf8')
    .then((response) => {
      const parsedArray = JSON.parse(response);
      parsedArray.forEach(({ id, name }) => console.log(`${id} - ${name}`));
    })
    .catch((err) => console.log(`Erro ao ler o arquivo: ${err}`));
}

function findCharacterById(id) {
  return new Promise((resolve, reject) => {
    showAllCharacters().then((r) => {
      const res = r.find((char) => Number(char.id) === id);
      if (res.length === 0) reject("id não encontrado");
      resolve(res);
    });
  });
}

findCharacterById(2).then((r) => console.log(r));
