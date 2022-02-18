import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

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

  toggleCompleted = id => {
    const updatedTodos = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    this.setState({ todos: updatedTodos });
  };

  updateTask = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, task: updatedTask };
      }
      return t;
    });

    this.setState({ todos: updatedTodos });
  };

  deleteTask = id => {
    this.setState({ todos: this.state.todos.filter(t => t.id !== id) });
  };

  addTask = t => {
    console.log('In addTask');
    console.log(t);
    const newTask = { task: t.task, completed: false, id: uuidv4() };
    this.setState({ todos: [...this.state.todos, newTask] });
  };
  render() {
    const todos = this.state.todos.map(t => (
      <Todo
        task={t.task}
        key={t.id}
        id={t.id}
        deleteTask={this.deleteTask}
        updateTask={this.updateTask}
        toggleCompleted={this.toggleCompleted}
        completed={t.completed}
      />
    ));
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
