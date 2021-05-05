const assert = require('assert');

// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  return arrays.reduce(((accumulator, currentValue) => accumulator.concat(currentValue)), [])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
