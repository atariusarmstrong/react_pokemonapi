import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Trainer from './components/Trainer';
import Pokedex from './components/Pokedex';
import Team from './components/Team';
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
  state = {
    trainer: null,
    search: null,
    pokemon: null,
    team: []
  }
  

  componentWillMount(){
    this.searchPokemon()
  }

  
  changeTrainerName = (e) => {
    this.setState({trainer: e.target.value})
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  searchPokemon = async () => {
    console.log(`searching ${this.state.search}`)
    let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.search}/`)
    this.setState({pokemon: newPokemon.data})
    console.log(this.state.pokemon)
  }

  addPokemon = () => {
    let pokemon = this.state.pokemon
    let team = this.state.team
    team.push(pokemon) 
    this.setState({team: team})
    // this.setState({team: banana})
    // this.state.team.push(this.state.pokemon)
    // console.log(this.state.team)
  }

  removePokemon = (index) => {
  const team = [...this.state.team]
   team.splice(index, 1)
   this.setState({team})
  }
  render() {
    return (
      <div className="App">
        <h1 className="header justify-content-md-center">Pokemon React App</h1>
        <Trainer 
          trainer = {this.state.trainer}
          changeTrainerName = {this.changeTrainerName}
        />
        <Container>
          <Row>
            <Col>
              <Pokedex 
                pokemon = {this.state.pokemon}
                handleChange = {this.handleChange}
                searchPokemon = {this.searchPokemon}
                addPokemon = {this.addPokemon}
              />
            </Col>
            <Col>
              <Team 
                trainer = {this.state.trainer}
                team = {this.state.team}
                removePokemon = {this.removePokemon}
              />
            </Col>
          </Row>
        </Container>
        
        
        
      </div>
    );
  }
}

export default App;
