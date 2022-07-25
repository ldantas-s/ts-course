import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';
const url = `${baseURL}/todos/1`;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
