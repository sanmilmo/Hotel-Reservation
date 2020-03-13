import React from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Rooms from './components/Rooms';


import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
    <NavBar />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/rooms/" component={Rooms} />
    </Switch>
    </>
  );
}

export default App;

