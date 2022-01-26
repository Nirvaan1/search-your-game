/**
 * @author Nirvaan Guilloux
 * Licence MIT
 */

import React, {Component} from 'react';

class SearchCompo extends Component {
    constructor(props) {
        super(props);


    }

    handleFilterText = (event) => {
        this.props.handleSearch(event.target.value)
    }

    handleInStockChange = (event) => {
        this.props.handleInStockChange(event.target.checked)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="search" onChange={this.handleFilterText}/>
                <input type="checkbox" className="" onChange={this.handleInStockChange}/>
                {' '}
                <p>Produits en stock seulement</p>
            </div>
        );
    }

}

export default SearchCompo;