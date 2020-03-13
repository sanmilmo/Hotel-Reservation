import React from 'react'
// import { Link } from 'react-dom';
import Jumbo from '../components/Jumbo';
import CardDeck from '../components/CardDeck';
import Footer from '../components/Footer';



const home = () => {
    return (
      <>
        <Jumbo />
        <h1 className="home-rooms"> ROOMS AND SUITES</h1>
        <CardDeck />
        <Footer />
      </>
    );
  };
  
  export default home;

