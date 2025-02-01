import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Home, ShoppingCart, User, LogIn,Contact } from 'lucide-react';
import  logo from "./wine.jpeg";
function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" style={{ padding: '10px 0' }}>
        <img
        src={logo}
        alt="BoozeCart Logo"
        style={{
          height: '40px', // Adjust the height as needed
          width: 'auto', // Maintain aspect ratio
          borderRadius:"50%"
        }}
      />
      <Container>
        <BsNavbar.Brand as={Link} to="/BoozeCart-demo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
          BoozeCart
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/BoozeCart-demo" style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              <Home size={20} style={{ marginRight: '5px' }} /> Home
            </Nav.Link>
           
            <Nav.Link as={Link} to="/profile" style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              <User size={20} style={{ marginRight: '5px' }} /> Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ display: 'flex', alignItems: 'center' }}>
              <LogIn size={20} style={{ marginRight: '5px' }} /> Login
            </Nav.Link>
                   <Nav.Link as={Link} to="/register" style={{ display: 'flex', alignItems: 'center' }}>
              <LogIn size={20} style={{ marginRight: '5px' }} /> Register
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              <ShoppingCart size={20} style={{ marginRight: '5px' }} /> Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ display: 'flex', alignItems: 'center' }}>
           <Contact size={20}/> Contact
            </Nav.Link>
     

          </Nav>
  
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;