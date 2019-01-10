import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {

    let classItem = 'todo-list-item';
    
    if (done) {
      classItem += ' done';
    }
    if (important) {
      classItem += ' important';
    }

    return (
      <span className={ classItem }>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }
          >
          { label }
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }
                >
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
}


export default TodoListItem;