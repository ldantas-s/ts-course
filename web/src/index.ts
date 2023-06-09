import { User } from './models/User';

const user = User.buildUser({ id: 3, name: 'Natsu', age: 14 });

user.on('save', () => {
  console.log(user);
});

console.log(user.getAll());
