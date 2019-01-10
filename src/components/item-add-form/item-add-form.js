import React, { Component } from 'react';

import './item-add-form.css';


export default class ItemAddForm extends Component {

    state = {
        label: ''
    };
    
    onLabelChange = (e) => {
       this.setState({
           label: e.target.value
       })
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        })
    }

    render () {
        const { label } = this.state;
        return (
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       value={label}
                       placeholder="What need to be done?"/>
                <button className="btn btn-primary"
                    type="submit">
                    Add item
                </button>

            </form>
        );
    }
}