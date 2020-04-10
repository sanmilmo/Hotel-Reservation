import React from 'react';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingTable from './BookingTable';
import { useSelector, useDispatch } from 'react-redux';
import { adult, children, reset_calendar, reset_table, add_room } from './../actions';


export default function Booking(props) {
    const dispatch = useDispatch();
    const { from, to } = useSelector(state => state.calendar)
    const { adults, children } = useSelector(state => state.people)
    const rooms = useSelector(state =>state.rooms)
    console.log(rooms)

    let fromDate = new Date(props.match.params.from);
    let toDate = new Date(props.match.params.to);

    function handleAddRoom() {
        let data = {
            "number": Math.random(),
            "room": "Del medio",
            "adults": adults,
            "children": children,
            "from": from,
            "to": to
        };
        dispatch(add_room(data));
    }

    return (
        <div className="booking-body">
        <h1 className="guest-title">Guests & Rooms</h1>
        <Row>
           <Col sm={6}><BookingForm /></Col> 
           <Col sm={6}><Calendar /></Col>
        </Row>
        <Row>
            {
                from && to &&
                (<Button onClick={handleAddRoom}>Add Room</Button>)
            }
        </Row>
        <Row>
            {
                rooms !== undefined &&
                rooms.length > 0 &&
                (<Button onClick={() => dispatch(reset_table())}>Clear Table</Button>)
            }
        </Row>
        <Row>
            <BookingTable />
        </Row>
        <Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}}variant="info" Link href={"/payment"}>CONFIRM DATES OF STAY</Button>
        </div>
    )
}