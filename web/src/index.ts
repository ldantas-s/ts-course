import { User } from './models/User';

const user = new User({ id: 3, name: 'Natsu', age: 14 });

user.on('save', () => {
  console.log(user);
});

user.save();
