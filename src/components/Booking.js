import React from 'react';
import Table from 'react-bootstrap/Table';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Booking(props) {
    console.log(props)
    console.log(props.match.params.from)
    console.log(props.match.params.to)

    let fromDate = new Date(props.match.params.from);
    let toDate = new Date(props.match.params.to);

    return (
        <div className="booking-body">
        <h1 className="guest-title">Guests & Rooms</h1>
        <Row>
           <Col sm={6}><BookingForm /></Col> 
           <Col sm={6}><Calendar /></Col>
        </Row>
            <Table  className="table-booking">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Room</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Adults</th>
                    <th>Children</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Room</td>
                    <td>{fromDate.toDateString()}</td>
                    <td>{toDate.toDateString()}</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}}variant="info" Link href={"/payment"}>CONFIRM DATES OF STAY</Button>
        </div>
    )
}