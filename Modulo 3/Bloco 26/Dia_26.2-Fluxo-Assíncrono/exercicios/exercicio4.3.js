const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  }).then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  }).then((strings) => {
    strings.forEach((string) => string);
  });

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

  return console.log(newArray);
}

filterSimpsons();
