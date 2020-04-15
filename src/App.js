import React, {useState} from 'react';
import Home from './Home'
import NavBar from './NavBar';
import Rooms from './Rooms';
import { Switch, Route } from "react-router-dom";
import Booking from './Booking';
import Login from './Login';
import Reservation from './Reservation';
import EventsPage from './EventsPage';
import FoodPage from './FoodPage';
import Casino from './Casino';
import Spa from './Spa';
// import CreditCard from './CreditCard';
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
       <Route path="/booking/:roomTitle/:roomPrice" name="booking" component={Booking} />
       <Route path="/events" name="events" component={EventsPage} />
       <Route path="/food" name="food" component={FoodPage} />
       <Route path="/casino" name="casino" component={Casino} />
       <Route path="/login" name="login" component={Login} />
       <Route path="/reservation" name="reservation" component={Reservation} />
       <Route path="/casino" name="casino" component={Casino} />
       <Route path="/spa" name="spa" component={Spa} />
       {/* <Route path="/creditcard" name="creditcard" component={CreditCard} /> */}

       <Route path="*" component={ () => <h1 style={{color: "white", textAlign: "center"}}>404 NOT FOUND</h1> } />
    </Switch>
    </>
  );
}

export default App;

