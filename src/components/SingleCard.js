import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function SingleCard(props) {
    return ( 
        <Card>
          <Card.Img variant="top" src={props.image} alt="room-images"/>
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <Button variant="primary" Link href="/rooms/">More Details</Button>
          </Card.Body>
        </Card>
    )
}



