import React from 'react';
import roomsData from './data/roomsData';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";


export default function Rooms(props) {
  const isLogged = useSelector(state => state.isLogged)
    console.log(props)
    return (
      <div style={{color: 'white'}}>
        <Carousel style={{color: "white"}}>
          {roomsData[props.match.params.room-1].images.map(image => (
            <Carousel.Item key={roomsData[props.match.params.room-1].id}>
              <img  style={{height: "500px"}} className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption>
                <h3>{roomsData[props.match.params.room-1].title}</h3>
                <p>{roomsData[props.match.params.room-1].subTitle}</p>
                <h4>Starting from CAD${roomsData[props.match.params.room-1].price}</h4>
                <Link to={"/booking/"+roomsData[props.match.params.room-1].title+"/"+roomsData[props.match.params.room-1].price}><Button variant="info" Link href={"/booking/"+roomsData[props.match.params.room-1].title+"/"+roomsData[props.match.params.room-1].price}>BOOK IT</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel >
        <MDBContainer style={{marginTop: '40px'}}>
        <MDBRow>
          <MDBCol md="8">
            {roomsData[props.match.params.room-1].text[0]}
          </MDBCol>
          <MDBCol md="4" >
            {roomsData[props.match.params.room-1].text[1]}
          </MDBCol>
        </MDBRow>
        <hr></hr>
        <MDBRow>
          <MDBCol md="8">
              {roomsData[props.match.params.room-1].text[2]}  
          </MDBCol>
          <MDBCol md="4" >
              <MDBRow>{roomsData[props.match.params.room-1].text[3]}</MDBRow>
              <MDBRow>{roomsData[props.match.params.room-1].text[4]}</MDBRow>
              <MDBRow>{roomsData[props.match.params.room-1].text[5]}</MDBRow>
              <MDBRow>{roomsData[props.match.params.room-1].text[6]}</MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <h4 style={{margin: "30px auto", textAlign: "center", color: "white"}}>{roomsData[props.match.params.room-1].text[7]}</h4>  
      <img src={roomsData[props.match.params.room-1].mapImage} className="img-fluid z-depth-1" alt=""/>
    </div>
    );
}

