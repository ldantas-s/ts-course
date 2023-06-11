import { User } from './models/User';
import { UserForm } from './views/UserForm';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Natsu', age: 14, id: 10 });

if (!root) {
  throw new Error('Root element not found');
}

const userForm = new UserForm(root, user);

userForm.render();
