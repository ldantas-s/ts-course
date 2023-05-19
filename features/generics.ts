// problem

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collention: string[]) {}

  get(index: number): string {
    return this.collention[index];
  }
}

// solution
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
// type annotation <string>
const arrayTypeAnotation = new ArrayOfAnything<string>(['a', 'b', 'c']);

// type inference, it's not necessary to define a type
const arrayTypeInference = new ArrayOfAnything(['a', 'b', 'c']);

// function with generics
// problem
function printStrings(arr: string[]): void {
  for (let value of arr) {
    console.log(value);
  }
}
function printNumbers(arr: number[]): void {
  for (let value of arr) {
    console.log(value);
  }
}

// solution
function printAnything<T>(arr: T[]): void {
  for (let value of arr) {
    console.log(value);
  }
}

// type annotation
printAnything<number>([2, 3, 4]);
// type inference
printAnything(['a', 'b', 'c']);

// Generics constraints
class Car {
  wheels: number;

  print(): void {
    console.log('I am a Car');
  }
}

class House {
  area: number;

  print(): void {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let value of arr) {
    value.print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
