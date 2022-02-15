import React, { Component } from 'react';

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
    return (
      <div>
        <h1>Todo List</h1>
        {/* <TodoForm /> */}
        <ul>
          {this.state.todos.map(t => (
            <li>{t.task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
