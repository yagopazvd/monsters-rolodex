import React, { Component } from 'react';

import { SearchBox } from './components/searchbox/SearchBox.component';
import { CardList } from './components/card-list/CardList.component';

import './App.css';

class App extends Component {
  state = {   
    monsters:[],
    searchField:""
  }

  search = e => {this.setState({searchField: e.target.value})}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const filterMonsters = this.state.monsters.filter(monster =>
       monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
       );
    return (
      <div className="App">
        <h1 className="App-title">Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.search}/>
        <CardList monsters={filterMonsters}/>
      </div>
    )
  }
}

export default App;
