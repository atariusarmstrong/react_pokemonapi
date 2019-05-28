import React, { Component } from 'react';
import {Card, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'




class Pokedex extends Component {
    

    render() {
        return (
            <div>
                <Form onSubmit={e => {e.preventDefault(); this.props.searchPokemon()}}>
                    <Form.Row >
                        <Form.Control size='sm' onChange={this.props.handleChange} placeholder="Pokemon name or number..."/>
                        <Button type='submit' className='search'>Search</Button>
                    </Form.Row>
                    
                </Form>
                <div>
                <Card>
                    {this.props.pokemon && 
                        <div>
                            <Card.Img variant='top' src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} className='cardImg'/>
                            <Card.Body>
                            <Card.Title className='cardHeader'>#{this.props.pokemon.id} - {this.props.pokemon.name}</Card.Title>
                            <Button onClick={this.props.addPokemon}>Add to team</Button>

                            <Card.Text>

                            

                            <p>Weight: {this.props.pokemon.weight}</p>
                            <p>Height: {this.props.pokemon.height}</p>
                            <div>
                                {/* Speed: {this.props.pokemon.stats[0].state.name} */}
                            </div>
                            <div>{this.props.pokemon.moves.map((moves, i) => (
                                <p>{moves.move.name}</p>
                                
                            )
                            )}</div>
                            </Card.Text>
                            
                            </Card.Body>
                        </div>
                        
                        
                        }
                </Card>
                    
                
                </div>
            </div>
        );
    }
}

export default Pokedex;