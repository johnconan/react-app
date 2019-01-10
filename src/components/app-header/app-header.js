import React, { Component } from 'react';
import './app-header.css'
class AppHeader extends Component {


    render() {

        let classItem = '';

        if (this.props.toDo <= 7) {
            classItem += ' green';
        } else {
            classItem += ' red';
        }
 
        const { toDo, done } = this.props;

        return (
            <div className="app-header d-flex">
                <h1 className="app-header-heading">ToDo List</h1>
                <h2 className={classItem}>{toDo} more to do, {done} done</h2>
            </div>
        );
    }
};

export default AppHeader;