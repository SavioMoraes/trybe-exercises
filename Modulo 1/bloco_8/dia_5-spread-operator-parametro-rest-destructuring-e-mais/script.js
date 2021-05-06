// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian
// console.log(person); // nationality não é adicionado ao array person!

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// let person = {
//     firstName: 'João',
//     lastName: 'Jr II',
// };

// let {firstName, lastName, nationality = 'Brazilian',} = person; 

// const otherPerson = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // não consegui

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude});

// console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
console.log(multiply(8, 4));
