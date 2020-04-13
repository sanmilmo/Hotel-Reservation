import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">SANMO Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/events"}>Events</NavDropdown.Item>
                <NavDropdown.Item href={"/food"}>Food and Drink</NavDropdown.Item>
                <NavDropdown.Item href={"/casino"}>Casino</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Spa & Salon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Offers</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

