import React, { Component } from 'react';


class Pokedex extends Component {
    

    render() {
        return (
            <div>
                {/* prevent default method has to be placed here bc it can't be inserted into an async function */}
                <form onSubmit={e => {e.preventDefault(); this.props.searchPokemon()}}>
                    <input onChange={this.props.handleChange} placeholder="Pokemon name or number..."></input>
                    <button>Search</button>
                </form>
                <div>
                    {this.props.pokemon && 
                    <div>
                        <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name}/>
                        <p>#{this.props.pokemon.id} - {this.props.pokemon.name}</p>

                        <button onClick={this.props.addPokemon}>Add to team</button>

                        <p>Weight: {this.props.pokemon.weight}</p>
                        <p>Height: {this.props.pokemon.height}</p>
                        <div>{this.props.pokemon.moves.map((moves, i) => (
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