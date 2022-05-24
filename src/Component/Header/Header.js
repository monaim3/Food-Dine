import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo2.png'
import useAuth from '../Hooks/UseAuth';
import './Header.css'
const Header = () => {
  const { user, signout } = useAuth()
  return (
    <>
    <Row>
      <Col>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'><img src={logo} alt="logo" /></Navbar.Brand>

          <Nav className="ms-auto">

             
               {user.email?
                 (
                  <>
                     <Nav.Link>{user.displayName}</Nav.Link>
                  <Nav.Link><img className='profileimg' src={user.photoURL} alt="" /></Nav.Link>
                  <Nav.Link onClick={signout}> Sign Out</Nav.Link>
                  </>
                 ):
               
               (
                <>
                 <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup' className="signup">Sign up</Nav.Link>
                </>
               )
             }
           


          </Nav>


        </Container>
      </Navbar>
      </Col>
      </Row>
    </>
  );
};

export default Header;