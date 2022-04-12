import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de Diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}cm²`);
console.log(`Losango de Diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(200, 50)}cm²`);
console.log(`Losango de Diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(75, 25)}cm²`);

console.log(`Trapézio de altura 50cm, Base maior 100cm e base menor 70cm: ${Exercise.trapeze(50, 100, 70)}cm²`);
console.log(`Trapézio de altura 50cm, Base maior 100cm e base menor 70cm: ${Exercise.trapeze(35, 75, 50)}cm²`);
console.log(`Trapézio de altura 50cm, Base maior 100cm e base menor 70cm: ${Exercise.trapeze(80, 150, 120)}cm²`);

console.log(`Círculo com área de 25cm: ${Exercise.circle(25)}cm²`)
console.log(`Círculo com área de 100cm: ${Exercise.circle(100)}cm²`)
console.log(`Círculo com área de 12,5cm: ${Exercise.circle(12.5)}cm²`)
