/**
 * @author Nirvaan Guilloux
 * Licence MIT
 */

import React, {Component} from 'react';
import SearchCompo from './SearchCompo';
import JeuxTable from './JeuxTable';

class FilterableJeuxTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
             filterTerxt : '',
             isStockOnly : false,
        }

        this.handleSearch = this.handleSearch.bind((this));
        this.handleInStockChange = this.handleInStockChange.bind((this));
    }


    handleSearch(event) {
        this.setState({filterTerxt :event})
    }
    handleInStockChange (event) {
        this.setState({isStockOnly :event})
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <SearchCompo
                    filterTerxt={this.state.filterTerxt}
                    isStockOnly={this.state.isStockOnly}
                    handleSearch={this.handleSearch}
                    handleInStockChange={this.handleInStockChange}
                />
                <JeuxTable
                    filterTerxt={this.state.filterTerxt}
                    isStockOnly={this.state.isStockOnly}
                    jeux={this.props.jeux}/>
            </div>
        )
    }


}


export default FilterableJeuxTable;