import React, { SyntheticEvent } from 'react';

import { ConnectedProps, connect } from 'react-redux';

import { endpoints, Todo } from '../reducers';
import { RootState } from '../store';

const mapState = (state: RootState) => ({
  todos: endpoints.fetchTodos.select()(state),
});

const mapDispatch = {
  fetchTodos: endpoints.fetchTodos.initiate,
};

const connector = connect(mapState, mapDispatch);
type AppProps = ConnectedProps<typeof connector>;

class _App extends React.Component<AppProps> {
  unsubscribe: null | (() => void) = null;

  onButtonClick = (): void => {
    const { unsubscribe } = this.props.fetchTodos();

    this.unsubscribe = unsubscribe;
  };

  componentWillUnmount(): void {
    this.unsubscribe?.();
  }

  renderList(todos: Todo[]): JSX.Element[] {
    function markDone(condition: boolean): string {
      return condition ? 'line-through' : 'none';
    }

    function toggleDone(e: SyntheticEvent<HTMLLIElement, MouseEvent>) {
      const textDecoration = e.currentTarget.style.textDecoration;

      e.currentTarget.style.textDecoration = markDone(
        textDecoration !== 'line-through'
      );
    }

    return todos.map((todo) => (
      <li
        key={todo.id}
        onClick={toggleDone}
        style={{
          cursor: 'pointer',
          margin: '8px 0',
          textDecoration: markDone(todo.completed),
        }}
      >
        {todo.title}
      </li>
    ));
  }

  render() {
    const { data = [], isLoading } = this.props.todos;
    const hasTodos = Boolean(data.length);

    return (
      <>
        <h1>Hi, there</h1>
        <h2>Bellow has a list of todos</h2>
        <button onClick={this.onButtonClick}>Get Todos</button>
        {isLoading && <p>loading...</p>}
        {hasTodos && <ol>{this.renderList(data)}</ol>}
        {!hasTodos && !isLoading && <p>No Todos</p>}
      </>
    );
  }
}

export const App = connector(_App);
