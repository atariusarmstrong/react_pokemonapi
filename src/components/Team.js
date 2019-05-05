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
                        <p>{pokemon.name}</p>
                    ))}
                </div>
                }
                
            </div>
        );
    }
}

export default Team;