import React, {useState} from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import EventsPage from './EventsPage';
import Events from './Events';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function NavBar(props) {
    
    // const isLogged = useSelector(state => state.isLogged)    
    // const [username, setUsernameState] = useState("");

    function setUsername(username) {
        props.setUsername(username)
        // setUsernameState(username)
    }

    function Greeting(props) {

        if (props.username !== "") {
            return  <h4>Welcome {props.username}!</h4>;
        }
        return <Login setUsername={setUsername}/>;
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">SANMO Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
                <Link to="/events"><NavDropdown.Item href="/events">Events</NavDropdown.Item></Link>
                <Link to="/food"><NavDropdown.Item>Food and Drink</NavDropdown.Item></Link>
                <Link to="/events"><NavDropdown.Item>Casino</NavDropdown.Item></Link>
                <Link to="/events"><NavDropdown.Item>Spa & Salon</NavDropdown.Item></Link>
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

