import React, { Component } from 'react'
import {
    Col,
    Form,
    Button
} from 'react-bootstrap';

class UbdateForm extends Component {
    render() {
        return (
            <div>
                <Col style={{ width: '50%' }}>
                    <Form onSubmit={(e) => {
                         this.props.handleUpdateSubmit(e) 
                         }}>
                        <Form.Label>Book name</Form.Label>
                        <Form.Control name='name' required />
                        <Form.Label>description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description' required />
                        <Form.Label>Status</Form.Label>
                        <Form.Control name='status' required />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name='email' required />
                        <Button variant="outline-danger" type="submit">
                            update
                        </Button>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default UbdateForm
