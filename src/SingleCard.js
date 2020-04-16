import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function SingleCard(props) {
    return ( 
        <Card>
          <Card.Img variant="top" src={props.image} alt="room-images"/>
          <Card.Body className={"d-flex flex-column"}>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <Link to={"/rooms/"+ props.id}><Button  style={{position: 'absolute', bottom: '0', right: '0'}} variant="primary" Link href={"/rooms/"+ props.id}>More Details</Button></Link>
          </Card.Body>
        </Card>
    )
}




