const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

//---------------------------------------------------------------------------

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

//---------------------------------------------------------------------------

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// console.log(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao));