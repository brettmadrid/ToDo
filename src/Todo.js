import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleRemove = e => {
    this.props.deleteTask(this.props.id);
  };

  toggleForm = e => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let result = this.state.isEditing ? (
      <div>
        <form onSubmit={this.handleUpdate}>
          <input
            type='text'
            placeholder={this.props.task}
            name='task'
            value={this.state.task}
            id={this.props.id}
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleForm}>
          <i className='fas fa-pen' />
        </button>
        <button onClick={this.handleRemove}>
          <i className='fas fa-trash' />
        </button>
        <li>{this.props.task}</li>
      </div>
    );
    return result;
  }
}

export default Todo;
