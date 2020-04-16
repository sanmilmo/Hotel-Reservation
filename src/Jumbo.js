import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FaHotel } from 'react-icons/fa';

export default function Jumbo() {
  const vegasHome = "images/vegasHome.jpg"
    return (
        <Jumbotron className="jumbo-img" style={{ backgroundImage: `url(${vegasHome})`}}>
          <h3 style={{fontFamily: 'Girassol, cursive'}}>The most iconic hotel on the Las Vegas Strip</h3>
        </Jumbotron>
    )
}
