import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class Team extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.trainer && <p>{this.props.trainer}'s Team</p>}</h2>
                {this.props.team &&
                <div>
                    {this.props.team.map((pokemon, i) => (
                        <div key={pokemon.id}>
                            <span className='cardHeader'>#{pokemon.id} - {pokemon.name}</span>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <Button onClick={()=> this.props.removePokemon(i)}>Remove from team</Button>
                        </div>
                    ))}
                </div>
                }
                
            </div>
        );
    }
}

export default Team;