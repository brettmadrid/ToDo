import React, { Component } from 'react';
import { EditTodoForm } from './EditTodoForm';

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  deleteHandler = e => {
    this.props.deleteTask(this.props.id);
  };

  editHandler = e => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    let result = this.state.isEditing ? (
      <EditTodoForm task={this.props.task} />
    ) : (
      <div>
        <button onClick={this.editHandler}>
          <i className='fas fa-pen' />
        </button>
        <button onClick={this.deleteHandler}>
          <i className='fas fa-trash' />
        </button>
        <li>{this.props.task}</li>
      </div>
    );
    return result;
  }
}

export default Todo;
