/*Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020'.*/

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let index in carro) {
  console.log(`${index}: ${carro[index]}`);
}