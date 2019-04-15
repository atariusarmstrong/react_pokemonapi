import React, { Component } from 'react';
import axios from 'axios'

class Pokedex extends Component {
    state = {
        search: null,
        pokemon: null
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    // searchPokemon = (e) => {
    //     e.preventDefault()
    //     let newPokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.search}/`)
    // }
    // componentDidMount = () => {
    //     this.searchPokemon()
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.searchPokemon}>
                    <input onChange={this.handleChange} placeholder="Pokemon name or number..."></input>
                    <button>Search</button>
                </form>
                <div>

                </div>
            </div>
        );
    }
}

export default Pokedex;