import React from 'react';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingTable from './BookingTable';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { adult, children, reset_calendar, reset_table, add_room, reset_people } from './actions';


export default function Booking(props) {
    const dispatch = useDispatch();
    const { from, to } = useSelector(state => state.calendar)
    const { adults, children } = useSelector(state => state.people)
    const rooms = useSelector(state => state.rooms)

    let roomTitle = props.match.params.roomTitle;
    let roomPrice = props.match.params.roomPrice;

    function handleAddRoom() {
        let data = {
            "number": Math.floor(Math.random()*100),
            "room": roomTitle,
            "price": roomPrice,
            "adults": adults,
            "children": children,
            "from": from,
            "to": to
        };
        dispatch(add_room(data));
        dispatch(reset_calendar());
        dispatch(reset_people());
    }
    const paymentImage = "/images/wall.jpg"
    return (
        <div style={{ width: "100%", height: 'auto', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${paymentImage})`}}>
        
        <h1 className="guest-title" >Guests & Rooms</h1>
        <Row>
        <Col md={6}><BookingForm /></Col> 
        <Col md={6}><Calendar /></Col>
        </Row>
        <Row>
            {
                from && to &&
                (<Button style={{margin: "20px 158px 20px auto", display: "block"}} onClick={handleAddRoom}>Add Room</Button>)
            }
        </Row>
        <BookingTable />
        <Row>
            {
                rooms !== undefined &&
                rooms.length > 0 &&
                (<Button style={{margin: "20px 158px 20px auto", display: "block"}} onClick={() => dispatch(reset_table())}>Clear Table</Button>)
            }
        </Row>
        <Link to={{ pathname:'/reservation'}}><Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}} variant="info">BOOK</Button></Link> 
    </div>
    )
}