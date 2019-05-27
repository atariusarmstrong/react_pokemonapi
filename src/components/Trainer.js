import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
class Trainer extends Component {


    // handleChange = (e) => {
    //     this.setState({this.props.name: e.target.value})
    // }

    render() {
        return (
            <div>
                <Form>
                    <Row className='justify-content-md-center'>
                        <Col md='5'>
                            <Form.Control name='name' onChange={this.props.changeTrainerName} value={this.props.trainer} placeholder="Enter trainer's name..." />
                        </Col>
                    </Row>

                </Form>


            </div>
        );
    }
}

export default Trainer;