import React, { Component } from 'react';

export class Todo extends Component {
  render() {
    return (
      <div>
        <button>
          <i className='fas fa-pen' />
          {/* Edit */}
        </button>
        <button>
          <i className='fas fa-trash' />
        </button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
