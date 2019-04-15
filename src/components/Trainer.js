import React, { Component } from 'react';

class Trainer extends Component {
    state = {
        name: null
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input name='name' onChange={this.handleChange} value={this.state.name} placeholder="Enter trainer's name..."></input>
                </form>
                
                {this.state.name && <p>{this.state.name}'s Team</p>}
            </div>
        );
    }
}

export default Trainer;