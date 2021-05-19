const sum = require('./sum');
const number = require('./numberIsStrictEqual');
const arr = require('./arrayAndObject');
// const obj = require('./arrayAndObject');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// it('test strict equal number', () => {
//   expect(5).toBe("5"); // return false
// });

it('test strict equal number', () => {
  expect(5).toBe(number); // return true
});

//-----------------------------------------------------------------

test('array and object equality', () => {
  // expect(arr).toBe([1, 2, 3]); // fails
  // expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  // expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});