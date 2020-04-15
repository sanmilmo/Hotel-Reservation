import React, {useState} from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import EventsPage from './EventsPage';
import Events from './Events';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Auth from "./Auth"


export default function NavBar(props) {
    
    // const isLogged = useSelector(state => state.isLogged)    
    // const [username, setUsernameState] = useState("");
    // const logoHotel = "images/logoHotel.png"

    function setUsername(username) {
        props.setUsername(username)
        // setUsernameState(username)
    }

    function Greeting(props) {

        // if (props.username !== "") {
        //     return  <h4 style={{color: "white"}}>Welcome {props.username}!</h4>;
        // }
        // return <Login setUsername={setUsername}/>;
         if (props.username !== "") {
            return  <h4 style={{color: "white"}}>Welcome {props.username}!</h4>;
        }
        return <Login setUsername={setUsername}/>;
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">SANMO HOTEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
            <Link to="/events"><Nav.Link href="/events">Events</Nav.Link></Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
                <Link to="/food"><NavDropdown.Item href="/food">Food and Drink</NavDropdown.Item></Link>
                <Link to="/casino"><NavDropdown.Item href="/casino">Casino</NavDropdown.Item></Link>
                <Link to="/spa"><NavDropdown.Item href="/spa">Spa & Salon</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <Link to="/events"><NavDropdown.Item href="#action/3.4">Offers</NavDropdown.Item></Link>
            </NavDropdown>
            </Nav>
            <Nav>
                <Greeting username={props.username}/>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

