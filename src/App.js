import React, {useState} from 'react';
import Home from './Home'
import NavBar from './NavBar';
import Rooms from './Rooms';
import { Switch, Route } from "react-router-dom";
import Booking from './Booking';
import Login from './Login';
import Payment from './Payment';
import EventsPage from './EventsPage';
import FoodPage from './FoodPage';
import Casino from './Casino';
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
       <Route path="/login" name="login" component={Login} />
       <Route path="/payment" name="payment" component={Payment} />
    </Switch>
    </>
  );
}

export default App;

