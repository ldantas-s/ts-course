import 'reflect-metadata';

// const plane = {
//   color: 'gray',
// };
// Reflect.defineMetadata('note', 'Hi there', plane);
// Reflect.defineMetadata('note', 'I am about the color prop', plane, 'color');
// Reflect.defineMetadata('height', 10, plane);
// const note = Reflect.getMetadata('note', plane);

@printMetada
class Plane {
  color: string = 'gray';

  @markFunction('hello')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string): void {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

function printMetada(target: typeof Plane) {
  for (let key in target.prototype) {
    console.log(Reflect.getMetadata('secret', target.prototype, key));
  }
}
