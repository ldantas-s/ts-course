interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface Model {
  id: number;
}

const washDishes = {
  id: 20,
  name: 'Do the dishes',
  completed: false,
};
