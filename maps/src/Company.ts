import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
    state: string;
  };
  color = 'purple';

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
      state: faker.address.state(),
    };
  }

  markerContent(): string {
    return `
      <h1>${this.name}</h1>
      <p><i>${this.catchPhrase}</i></p>
      from ${this.location.state}.
     `;
  }
}
