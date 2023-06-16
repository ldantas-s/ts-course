import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <section>
        <h1>User Detail</h1>
        <ul>
        <li>Name: ${this.model.get('name')}</li>
        <li>Age: ${this.model.get('age')}</li>
        </ul>
      </section>
    `;
  }
}
