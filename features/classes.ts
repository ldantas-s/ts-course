class Vehicle {
  /**
   * Modifiers
   * public -> can be called anywhere for anywho
   * private -> can be called only for the class
   * protected -> can be called only for the class and their children
   *
   * PS: Modifiers can be used in fields/props/values
   */
  // by default the methods are public

  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Purple');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vrom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const corsa = new Car(4, 'Silver');
corsa.startDrivingProcess();
// corsa.honk();
