// Importação normal e 3 usos (fême, macho e todos!!!)
const dogNames = require('dog-names');   
 
console.log(dogNames.femaleRandom());
console.log(dogNames.maleRandom());
console.log(dogNames.allRandom());

/* Fazendo a importação desestruturada!!!! */
const { femaleRandom } = require('dog-names');
const { maleRandom } = require('dog-names');
const { allRandom } = require('dog-names');

console.log(femaleRandom());
console.log(maleRandom());
console.log(allRandom());
