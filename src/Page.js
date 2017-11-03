import React, { Component } from 'react';

import todo from './Todo.scss';
import layout from './Layout.scss';

class Todo extends Component {
  render() {
    return (
      <div className={layout.row}>
        <p className={todo.text}>
          To get started, edit <code>src/Todo.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Todo;