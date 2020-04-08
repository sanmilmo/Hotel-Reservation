import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function SingleCard(props) {
    // console.log(this.props)
    return ( 
        <Card>
          <Card.Img variant="top" src={props.image} alt="room-images"/>
          <Card.Body className={"d-flex flex-column"}>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <Button className={"align-self-end"} variant="primary" Link href={"/rooms/"+ props.id}>More Details</Button>
          </Card.Body>
        </Card>
    )
}




