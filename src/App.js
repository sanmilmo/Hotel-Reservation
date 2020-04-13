import React, {useState} from 'react';
import Home from './Home'
import NavBar from './NavBar';
import Rooms from './Rooms';
import { Switch, Route } from "react-router-dom";
import Booking from './components/Booking';
import LoginPage from './components/LoginPage';
import Payment from './components/Payment';
import EventsPage from './components/EventsPage';
import FoodPage from './components/FoodPage';
import Casino from './components/Casino';
import { useSelector } from 'react-redux';

function App() {
  const [username, setUsernameState] = useState("")

  function setUsername(username) {
    setUsernameState(username)
  }


  return (
    <>
    <NavBar setUsername={setUsername} username={username}/>
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/rooms/:room" name="rooms" component={Rooms} />
       <Route path="/booking/:roomTitle" name="booking" component={Booking} />
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

