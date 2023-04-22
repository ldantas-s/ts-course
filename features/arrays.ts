// We need to define what type of value will be set in variable
const carMakersOne: string[] = [];
// in other hand, if you define the value of the variable it's not necessary to define a type for it
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMakeOne: string[][] = [];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomplatible values
carMakers.push(110);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDate: (Date | string)[] = [];
importantDate.push('2022-06-30');
importantDate.push(new Date());
