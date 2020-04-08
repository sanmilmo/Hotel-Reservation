import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class BookingForm extends Component {
    render() {
        return (
            <div>
                <Form className="form-booking">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Adults</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Children</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}