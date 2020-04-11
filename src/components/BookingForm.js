import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux'
import { adult, children } from './../actions';

export default function BookingForm() {
    const dispatch = useDispatch();
    const people = useSelector(state =>state.people)

    return (
        <div>
            <Form className="form-booking">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Adults</Form.Label>
                    <Form.Control as="select" onChange={(e) => dispatch(adult(e.target.value))}>
                    <option selected={people.adult === 1}>1</option>
                    <option selected={people.adult === 2}>2</option>
                    <option selected={people.adult === 3}>3</option>
                    <option selected={people.adult === 4}>4</option>
                    <option selected={people.adult === 5}>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Children</Form.Label>
                    <Form.Control as="select" onChange={(e) => dispatch(children(e.target.value))}>
                    <option selected={people.children === 0}>0</option>
                    <option selected={people.children === 1}>1</option>
                    <option selected={people.children === 2}>2</option>
                    <option selected={people.children === 3}>3</option>
                    <option selected={people.children === 4}>4</option>
                    <option selected={people.children === 5}>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}