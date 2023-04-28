import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
    state: string;
  };
  color = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
      state: faker.address.state(),
    };
  }

  markerContent(): string {
    return `
      <h1>${this.name}</h1>
      from <b>${this.location.state}</b>
    `;
  }
}
