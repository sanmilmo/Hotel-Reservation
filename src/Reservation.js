import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BookingTable from './BookingTable';
import Payment from './Payment';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



export default function Reservation() {
    const history = useHistory();
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.rooms)

    function Totals() {
        let subTotalValue = 0.0
        let taxesValue = 0.0
        let totalValue = 0
        const oneDay = 24 * 60 * 60 * 1000;
        let diffDays, oneSubTotal


        rooms.forEach((room) => {
            diffDays = Math.round(Math.abs((room.from - room.to) / oneDay));
            oneSubTotal = room.price * diffDays
            subTotalValue = subTotalValue + oneSubTotal;
            
        });
        taxesValue = subTotalValue * 0.15
        totalValue = subTotalValue + taxesValue
        
        return (
            <MDBTable style={{width: "40%", margin: "50% 0 0 60%"}}>
                    <MDBTableHead color="primary-color" >
                        <tr>
                            <th>Subtotal</th>
                            <th>CAD$ {subTotalValue}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>Tax (QST/HST)</td>
                            <td>CAD$ {taxesValue}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>CAD$ {totalValue}</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
        )
    }

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
        history.push("/purchase");
    };
    const reservationImage = "./images/reservationImg.jpg"
    
    return (
        <div style={{ width: "100%",backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${reservationImage})`}}>
            <h1 style={{color: "black", textAlign: 'center', padding: "20px"}} >Thank You For Completing Your Reservation</h1>
            <Row>
                <Col sm={10}><BookingTable /></Col>
                
            </Row>
            <Row style={{marginTop: '60px'}}>
                <Col sm={4}><Totals/></Col>
                <Col sm={8}><Payment /></Col>
            </Row>
            <Button style={{ margin: '30px auto', maxWidth: '300px', display: 'block '}} variant="info" onClick={submitHandler}>Confirm Reservation</Button>
            )
        </div>
    )
}