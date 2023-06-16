import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Natsu', age: 14 });

if (!root) {
  throw new Error('Root element not found');
}

const userEdit = new UserEdit(root, user);

userEdit.render();
console.log(userEdit);
