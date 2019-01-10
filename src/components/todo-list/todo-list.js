import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

class TodoList extends Component {

render () {

    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const elements = todos.map((item) => {
        return (
            <li className="list-group-item" key={item.id}
            ><TodoListItem
            label={item.label}
            important={item.important}
            done={item.done}
            dates={item.dates}
            onDeleted={ () => onDeleted(item.id) }
            onToggleImportant={ () => onToggleImportant(item.id) }
            onToggleDone={ () => onToggleDone(item.id) }
            />
            </li>
        );
    });
    
    return (
        <ul className="list-group todo-list">
        { elements }
        </ul>
    );
  }
    
};

export default TodoList;