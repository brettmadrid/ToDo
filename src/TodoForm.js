import React, { Component } from 'react';
import './TodoForm.css';

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Task </label>
        <input
          id='task'
          type='text'
          name='task'
          value={this.state.task}
          placeholder='...'
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
