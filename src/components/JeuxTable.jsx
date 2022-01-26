/**
 * @author Nirvaan Guilloux
 * Licence MIT
 */

import React, {Component} from 'react';
import JeuxCategory from "./JeuxCategory";
import JeuxRow from "./JeuxRow";

class JeuxTable extends Component {
    constructor(props){
        super(props);
        console.log('Les jeux filterTerxt', props.filterTerxt)
        console.log('Les jeux isStockOnly', props.isStockOnly)
    }

    render(){
        const filterTerxt = this.props.filterTerxt;
        const isStockOnly = this.props.isStockOnly;
        let byCategory;

        const rows = [];

        this.props.jeux.forEach(jeu => {
            if (jeu.name.toLowerCase().indexOf(filterTerxt) === -1 ){
                return;
            }

            if (isStockOnly && !jeu.stocked){
                return;
            }
            if (jeu.category !==  byCategory ){
                rows.push(<JeuxCategory category={jeu.category} key={jeu.id}/> )
            }

            rows.push(<JeuxRow jeu={jeu} key={jeu.name}/> )
            byCategory = jeu.category;
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                         {rows}
                    </tbody>

                </table>

            </div>
        )
    }
}

export default JeuxTable;