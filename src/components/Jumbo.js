import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Jumbo() {
  const vegasHome = "images/vegasHome.jpg"
    return (
        <Jumbotron className="jumbo-img" style={{ backgroundImage: `url(${vegasHome})`}}>
          
          <h1>SANMO Hotel</h1>
          <p>
          The most iconic hotel on the Las Vegas Strip
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
          
        </Jumbotron>
    )
}
