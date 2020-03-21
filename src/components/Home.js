import React from 'react'
// import { Link } from 'react-dom';
import Jumbo from '../components/Jumbo';
import CardRooms from "../components/CardRooms";
import Footer from '../components/Footer';



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

