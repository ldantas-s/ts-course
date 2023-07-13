@classDecorator
class Boat {
  // Decorators doesn't work to properties like color
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, Boat with problem')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swich');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat): void {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.error(message);
      }
    };
  };
}
