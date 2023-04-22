let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];

// classes
class Car {
  constructor() {}
}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1 - function that returns 'any' type
const json = '{"x": 10, "y ": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2 - when we declare a variable on line and
// initalizate it later
let words = ['red', 'green', 'blue'];
let foundWords: boolean;

words.forEach((word) => {
  if (word === 'green') foundWords = true;
});

// 3 - variable whose type cannot be inferred correctly
const numbers = [-10, -1, 1, 10];
let numberAboveZero: boolean | number = false;

numbers.forEach((number) => {
  if (number > 0) numberAboveZero = number;
});
