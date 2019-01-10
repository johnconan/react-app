import React, { Component } from 'react';

class ItemStatusFilter extends Component {


    buttons = [
        {name: 'all', label: 'all'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'done'}
     ]

    render () {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label})=> {
            const isActive = filter === name;
            const cls = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button className={`btn ${cls}`}
                        type="button"
                        key={name}
                        onClick={() => onFilterChange(name)}>
                {label}
                </button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
  
};

export default ItemStatusFilter;