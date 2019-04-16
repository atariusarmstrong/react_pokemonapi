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

    searchPokemon = async (e) => {
        // e.preventDefault()
        console.log(`searching ${this.state.search}`)
        let newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.search}/`)
        this.setState({pokemon: newPokemon.data})
        console.log(this.state.pokemon)
    }
    componentDidMount(){
        this.searchPokemon()
    }

    render() {
        return (
            <div>
                {/* prevent default method has to be placed here bc it can't be inserted into an async function */}
                <form onSubmit={e => {e.preventDefault(); this.searchPokemon()}}>
                    <input onChange={this.handleChange} placeholder="Pokemon name or number..."></input>
                    <button>Search</button>
                </form>
                <div>
                    {this.state.pokemon && 
                    <div>
                        <p>#{this.state.pokemon.id} - {this.state.pokemon.name}</p>
                        <p>Weight: {this.state.pokemon.weight}</p>
                        <p>Height: {this.state.pokemon.height}</p>
                        <div>{this.state.pokemon.moves.map((moves, i) => (
                            <p>{moves.move.name}</p>
                        )
                        )}</div>
                    </div>
                    
                    
                    }
                
                </div>
            </div>
        );
    }
}

export default Pokedex;