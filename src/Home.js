import React from 'react'
// import { Link } from 'react-dom';
import Jumbo from './Jumbo';
import CardRooms from "./CardRooms";
import Footer from './Footer';



const home = () => {
    return (
      <>
        <Jumbo />
        <h1 className="home-rooms"> ROOMS AND SUITES</h1>
        <CardRooms />
        <Footer />
      </>
    );
  };
  
  export default home;

