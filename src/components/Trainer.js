import React, { Component } from 'react';
import { Form } from 'react-bootstrap'

class Trainer extends Component {
    

    // handleChange = (e) => {
    //     this.setState({this.props.name: e.target.value})
    // }

    render() {
        return (
            <div>
                <Form>
                    <Form.Control name='name' onChange={this.props.changeTrainerName} value={this.props.trainer} placeholder="Enter trainer's name..."/>
                </Form>
                
                
            </div>
        );
    }
}

export default Trainer;