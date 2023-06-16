import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent?.querySelector('input') ?? null;

    if (input !== null) {
      const name = input.value;

      name && this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <section>
        <input placeholder='${this.model.get('name')}' />
        <button class='set-name'>Change name</button>
        <button class='set-age'>Set Random Age</button>
        <button class='save'>Save</button>
      </section>
    `;
  }
}
