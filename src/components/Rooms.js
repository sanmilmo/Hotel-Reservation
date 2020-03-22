import React from 'react';
import roomsData from '../data/roomsData';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class Rooms extends React.Component {

  render () {
    console.log(this.props)
    return (
      <>
        <Carousel>
          {roomsData[this.props.match.params.room-1].images.map(image => (
            <Carousel.Item key={roomsData[this.props.match.params.room-1].id}>
              <img className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption>
                <h3>{roomsData[this.props.match.params.room-1].title}</h3>
                <p>{roomsData[this.props.match.params.room-1].subTitle}</p>
                <Button variant="info">BOOK IT</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Container className='info-room'>
            <Row>
                <Col sm={8}>{roomsData[this.props.match.params.room-1].text[0]}</Col>
                <Col sm={4}>{roomsData[this.props.match.params.room-1].text[1]}</Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={8}>{roomsData[this.props.match.params.room-1].text[2]}</Col>
                <Col sm={4}>
                    <Row>{roomsData[this.props.match.params.room-1].text[3]}</Row>
                    <Row>{roomsData[this.props.match.params.room-1].text[4]}</Row>
                    <Row>{roomsData[this.props.match.params.room-1].text[5]}</Row>
                    <Row>{roomsData[this.props.match.params.room-1].text[6]}</Row>
                    </Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={8}>{roomsData[this.props.match.params.room-1].text[7]}</Col>
            </Row>
        </Container>
        <Image src={roomsData[this.props.match.params.room-1].mapImage} fluid />
      </>
    );
  }
}

