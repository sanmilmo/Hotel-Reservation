import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import BookingTable from './BookingTable';
import { useSelector, useDispatch } from 'react-redux';
import { add_room } from './actions';


export default function Payment() {
    const dispatch = useDispatch();
    const rooms = useSelector(state =>state.rooms)
    // const { data } = this.props.location;
    // console.log("payments")
    // console.log(data)
    // dispatch(add_room(data));
    
    // const rooms = useSelector(state =>state.rooms)

    return (
        <div>
            <h1>Thank You For Completing Your Reservation</h1>
            return (
                <div className="booking-body">

                <Row>
                    <BookingTable />
                </Row>
                <Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}}variant="info" Link href={"/payment"}>Purchase</Button>
                </div>
            )
        </div>
    )
}


