import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

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

  addTask = t => {
    console.log('In addTask');
    console.log(t);
    const newTask = { task: t.task, completed: false, id: 3 };
    this.setState({ todos: [...this.state.todos, newTask] });
  };
  render() {
    const todos = this.state.todos.map(t => <Todo task={t.task} key={t.id} />);
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
