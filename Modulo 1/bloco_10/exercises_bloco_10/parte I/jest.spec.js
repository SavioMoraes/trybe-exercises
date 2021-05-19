const sum = require('./exercicio01');
const { test, expect, describe } = require('@jest/globals');

describe('a função sum', () => {
  test('sum is function', () => {
    expect(typeof sum.sum).toBe('function');
  });
  test('sums two values', () => {
    expect(sum.sum(2, 3)).toEqual(5);
  });
  it('sums two values', () => {
    expect(sum.sum(4, 5)).toEqual(9);
  });
  it('sums two values', () => {
    expect(sum.sum(0, 0)).toEqual(0);
  });
});

// it é um 'alias' --apelido-- para test!
