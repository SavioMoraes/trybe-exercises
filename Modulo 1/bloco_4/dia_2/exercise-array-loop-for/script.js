let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercise 1

/*
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
*/

// Exercise 2

/*
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log(sum)
*/

// Exercise 3

/*
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);
*/

// Exercise 4

/*
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);

if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
*/

// Exercise 5

/*
let higherValue = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > higherValue) {
    higherValue = numbers[i];
  }
}

console.log(higherValue);
*/

// Exercise 6

/*
let oddValues = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddValues += 1;
  }
}

if (oddValues === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(oddValues);
}
*/

// Exercise 7

/*
let lowerValue = 10000;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < lowerValue) {
    lowerValue = numbers[i];
  }
}

console.log(lowerValue);
*/

// Exercise 8


result = []
for (i = 1; i <= 25; i += 1) {
  result.push(i);
}

console.log(result);


// Exercise 9

for (let i = 0; i < result.length; i += 1) {
  console.log(result[i] / 2);
};
