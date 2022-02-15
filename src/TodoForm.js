import React, { Component } from 'react';

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
    };
  }

  addTaskHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: '' });
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTaskHandler}>
        <label htmlFor='task'>Task </label>
        <input
          id='task'
          type='text'
          name='task'
          value={this.state.task}
          placeholder='...'
          onChange={this.inputHandler}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
