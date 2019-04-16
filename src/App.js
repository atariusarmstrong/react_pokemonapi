import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Trainer from './components/Trainer';
import Pokedex from './components/Pokedex';
import Team from './components/Team';

class App extends Component {
  state = {
    search: null,
    pokemon: null,
    team: []
  }
  

  componentDidMount(){
    this.searchPokemon()
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  searchPokemon = async (e) => {
    // e.preventDefault()
    console.log(`searching ${this.state.search}`)
    let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.search}/`)
    this.setState({pokemon: newPokemon.data})
    console.log(this.state.pokemon)
  }

  addPokemon = () => {
    this.state.team.push(this.state.pokemon)
    console.log(this.state.team)
  }
  render() {
    return (
      <div className="App">
        <h1>Pokemon React App</h1>
        <Trainer />
        <Pokedex 
          pokemon = {this.state.pokemon}
          handleChange = {this.handleChange}
          searchPokemon = {this.searchPokemon}
          addPokemon = {this.addPokemon}
        />
        <Team 
          team = {this.state.team}
        />
      </div>
    );
  }
}

export default App;
