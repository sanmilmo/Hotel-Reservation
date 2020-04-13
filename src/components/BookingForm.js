import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import { adult, children } from './../actions';

export default function BookingForm() {
    const dispatch = useDispatch();

    return (
        <div>
            <Form className="form-booking">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Adults</Form.Label>
                    <Form.Control as="select" onChange={(e) => dispatch(adult(e.target.value))}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Children</Form.Label>
                    <Form.Control as="select" onChange={(e) => dispatch(children(e.target.value))}>
                    <option>0</option>
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