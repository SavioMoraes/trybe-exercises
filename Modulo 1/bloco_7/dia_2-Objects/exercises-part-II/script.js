const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// console.log(lesson1);
// console.log(lesson2);
// console.log(lesson3);

// Exercício 2
const listKeys = (obj) =>  Object.keys(obj);
console.table(listKeys(lesson1));

// Exercício 3
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// Exercício 4
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

// Exercício 6
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Exercício 7
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

// Exercício 8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
