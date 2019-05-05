import React, { Component } from 'react';
import Trainer from './Trainer';

class Team extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.trainer && <p>{this.props.trainer}'s Team</p>}</h2>
                {this.props.team &&
                <div>
                    {this.props.team.map((pokemon, i) => (
                        <div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <p>#{pokemon.id} - {pokemon.name}</p>
                        </div>
                    ))}
                </div>
                }
                
            </div>
        );
    }
}

export default Team;