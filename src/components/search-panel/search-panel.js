import React, { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
       const term = e.target.value;
       this.setState({ term });
       this.props.searchChange(term);
    }

    render() {
        const { term } = this.state;
        return (
            <input type="text"
                className="search-input form-control"
                value={term}
                placeholder="Type to search"
                onChange={this.onSearchChange}/>
        );
    }
};

export default SearchPanel;