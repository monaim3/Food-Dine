import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from '../../images/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
            <Row>
       <Col><img src={footer} alt="" />
       
       </Col>
    <Col md="auto">
     <li><a href="#">About Online Food</a></li>
     <li><a href="#">Read Blog</a></li>
     <li><a href="#">Sign Up to Deliver</a></li>
     <li><a href="#">Add Your Resturant</a></li>
     

    </Col>
    <Col xs lg="2">
    <li><a href="#">Get Help</a></li>
     <li><a href="#">Read Faqs</a></li>
     <li><a href="#">Visit All cities</a></li>
     <li><a href="#">Add Your Resturant</a></li>
    </Col>
  </Row>

  <Row className='mt-5 '>
    <Col xs={12} md={6}>
    <p>Copyright @2022 online Food</p>
    </Col>
    <Col xs={6} md={2} >
     
    </Col>
    <Col xs={6} md={1} className="mx-auto">
     <p>Privacy</p>
    </Col>
    
    <Col xs={6} md={2} >
    <p>terms of  condition</p>

    </Col>
    <Col xs={6} md={1} >
    <p>pricing</p>

    </Col>
  </Row>
            </Container>
        </div>
    );
};

export default Footer;