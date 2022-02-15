import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          task: 'vacuum floor',
          completed: false,
          id: 1,
        },
        {
          task: 'feed chickens',
          completed: false,
          id: 2,
        },
      ],
    };
  }
  render() {
    const todos = this.state.todos.map(t => <Todo task={t.task} />);
    return (
      <div>
        <h1>Todo List</h1>
        {/* <TodoForm /> */}
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
