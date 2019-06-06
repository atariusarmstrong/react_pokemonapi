import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};


class Pokedex extends Component {

    render() {
        return (
            <div className='pokedex'>
                <h2>Pokedex</h2>
                <Form onSubmit={e => { e.preventDefault(); this.props.searchPokemon() }}>
                    <Form.Row >
                        <Col>
                            <Form.Control size='sm' onChange={this.props.handleChange} placeholder="Pokemon name or number..." />
                        </Col>
                        <Col>
                            <Button type='submit' className='search'>Search</Button>
                        </Col>
                    </Form.Row>

                </Form>
                <div>

                    {this.props.pokemon &&
                        <Fade top>
                            <Card>
                                <Card.Header className='cardHeader'>#{this.props.pokemon.id} - {this.props.pokemon.name}</Card.Header>
                                <Card.Img variant='top' src={this.props.pokemon.sprites.front_shiny} alt={this.props.pokemon.name} className='cardImg' />
                                <Card.Body>

                                    <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} />
                                    <img src={this.props.pokemon.sprites.back_default} alt={this.props.pokemon.name} />


                                    <div className='typeHolder'>{this.props.pokemon.types.map((type) => (
                                        <Badge pill
                                            
                                            style={{
                                                backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                                                color: 'white'
                                            }}>
                                            {type.type.name}
                                        </Badge>
                                    ))}</div>

                                    <Button variant='secondary' onClick={this.props.addPokemon}>Add to team</Button>

                                    <Card.Text>


                                        <p>HP: {this.props.pokemon.stats.hp}</p>

                                        <p>Weight: {this.props.pokemon.weight}</p>
                                        <p>Height: {this.props.pokemon.height}</p>
                                        <div>
                                            {/* Speed: {this.props.pokemon.stats[0].state.name} */}
                                        </div>
                                        {/* <div>{this.props.pokemon.moves.map((moves, i) => (
                                            <p>{moves.move.name}</p>

                                        )
                                        )}</div> */}

                                        <div>
                                            {this.props.pokemon.stats.map(({ stat, base_stat }) => (
                                                <p>{stat.name}:{base_stat}</p>
                                            ))}
                                        </div>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Fade>


                    }



                </div>
            </div>
        );
    }
}

export default Pokedex;