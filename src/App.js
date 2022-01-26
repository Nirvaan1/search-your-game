import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import FilterableJeuxTable from './components/FilterableJeuxTable';


function App() {
    const JEUX = [];

    JEUX.push({id: 1, category: 'FPS', price: '10€', stocked:true, name: 'Counter Strike',})
    JEUX.push({id: 2, category: 'FPS', price: '50€', stocked:true, name: 'Call of Duty',})
    JEUX.push({id: 3, category: 'FPS', price: '60€', stocked:true, name: 'Battlefield',})
    JEUX.push({id: 4, category: 'FPS', price: '10€', stocked:true, name: 'Fortnite',})
    JEUX.push({id: 5, category: 'Adventure', price: '70€', stocked:false, name: 'GTA 6',})
    JEUX.push({id: 6, category: 'Adventure', price: '100€', stocked:true, name: 'Saint Row',})
    JEUX.push({id: 7, category: 'Sport', price: '60€', stocked:true, name: 'FIFA',})
    JEUX.push({id: 8, category: 'Sport', price: '60€', stocked:true, name: 'PES',})
    JEUX.push({id: 9, category: 'Simulation', price: '100€', stocked:true, name: 'Fly Simulator',})

  return (
    <div className="App">
        <FilterableJeuxTable jeux={JEUX}/>
    </div>
  );
}

export default App;
