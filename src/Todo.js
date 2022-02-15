import React, { Component } from 'react';

export class Todo extends Component {
  deleteHandler = e => {
    this.props.deleteTask(this.props.id);
  };
  render() {
    return (
      <div>
        <button>
          <i className='fas fa-pen' />
        </button>
        <button onClick={this.deleteHandler}>
          <i className='fas fa-trash' />
        </button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
