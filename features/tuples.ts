const drink = {
  color: 'brown',
  carboneted: true,
  sugar: 40,
};

// ps: [type, type] !== (type, type)[]

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];

// No context
const carSpecs: [number, number] = [400, 3354];

// With context
const carStats = {
  horsepower: 400,
  weight: 3354,
};
