import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import BookingTable from './BookingTable';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_room } from './actions';


export default function Reservation() {
    const dispatch = useDispatch();
    const rooms = useSelector(state =>state.rooms)

    async function postData(data = {}) {
        if (data == {}) {
            return
        }
        
        const response = await fetch('/reservation', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async function submitHandler(evt) {
        evt.preventDefault();
        postData(rooms)
    };

    return (
        <div>
            <h1 style={{color: "white", textAlign: 'center', padding: "20px"}} >Thank You For Completing Your Reservation</h1>
          
                <div className="booking-body">

                <Row>
                    <BookingTable />
                </Row>
                <Link to={{ pathname:'/payment'}}><Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}}variant="info" onClick={submitHandler}>Confirm Reservation</Button></Link>
                </div>
            )
        </div>
    )
}


