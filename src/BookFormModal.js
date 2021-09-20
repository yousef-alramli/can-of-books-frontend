import React, { Component } from 'react'
import {
    Card,
    Alert,
    Col,
    Row,
    Form,
    Button
  } from 'react-bootstrap';
class BookFormModal extends Component {
    render() {
        return (
            <div>
                <Col style={{ width: '50%' }}>
                    <Form onSubmit={(e)=>{this.props.handleSubmit(e)}}>
                        <Form.Label>Book name</Form.Label>
                        <Form.Control name='name' required />
                        <Form.Label>description</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description' required />
                        <Form.Label>Status</Form.Label>
                        <Form.Control name='status' required />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name='email' required />
                        <Button variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default BookFormModal
