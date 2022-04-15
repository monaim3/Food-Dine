import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo2.png'
import './Header.css'
const Header = () => {
    return (
        <>
       
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand as={HashLink} to='/home'><img src={logo} alt="logo" /></Navbar.Brand>
         
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home"><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></Nav.Link> */}
            <Nav.Link as={HashLink} to='/login'>Login</Nav.Link>
            <Nav.Link className="signup" as={HashLink} to='/signup'>Sign up</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;