"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function diamond(Diagonal, diagonal) {
    return (Diagonal * diagonal) / 2;
}
exports.diamond = diamond;
function trapeze(height, Base, base) {
    return (height * (Base + base)) / 2;
}
exports.trapeze = trapeze;
function circle(radius) {
    const PI = 3.14;
    return PI * (radius ** 2);
}
exports.circle = circle;
