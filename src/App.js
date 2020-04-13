import React from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Rooms from './components/Rooms';
import { Switch, Route } from "react-router-dom";
import Booking from './components/Booking';
import LoginPage from './components/LoginPage';
import Payment from './components/Payment';
import EventsPage from './components/EventsPage';
import FoodPage from './components/FoodPage';
import Casino from './components/Casino';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/rooms/:room" name="rooms" component={Rooms} />
       <Route path="/booking/:from/:to" name="booking" component={Booking} />
       <Route path="/events" name="events" component={EventsPage} />
       <Route path="/food" name="food" component={FoodPage} />
       <Route path="/casino" name="casino" component={Casino} />
       <Route path="/login" name="login" component={LoginPage} />
       <Route path="/payment" name="payment" component={Payment} />
    </Switch>
    </>
  );
}

export default App;

