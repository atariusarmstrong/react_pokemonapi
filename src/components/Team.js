import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div>
                {this.props.team.map((pokemon, i) => (
                    <p>{pokemon.name}</p>
                ))}
            </div>
        );
    }
}

export default Team;