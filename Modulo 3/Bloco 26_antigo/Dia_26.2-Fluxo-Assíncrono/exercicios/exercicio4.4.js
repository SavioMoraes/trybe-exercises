const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  }).then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  }).then((strings) => {
    strings.forEach((string) => strings);
  });

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const simpsonsFamily = simpsons.filter(simpson => simpson.id <= 4);

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

}

createSimpsonsFamily();