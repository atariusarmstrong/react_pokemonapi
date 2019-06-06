import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Slide from 'react-reveal/Slide'


class Team extends Component {
    render() {
        return (
            <div>
                {this.props.trainer && 
                    <div className='trainer'>{this.props.trainer}'s Team</div>}
                {this.props.team &&
                <div>
                    {this.props.team.map((pokemon, i) => (
                        <Slide left>
                            <div className='teamcard' key={pokemon.id}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                <span>#{pokemon.id} - {pokemon.name}</span>
                                <Button onClick={()=> this.props.removePokemon(i)}>Remove from team</Button>
                            </div>
                        </Slide>
                    ))}
                </div>
                }
                
            </div>
        );
    }
}

export default Team;