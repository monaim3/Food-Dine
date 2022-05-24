import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../images/bannerbackground.png';
import banner2 from '../../images/spider-web-gb366ca0f5_1280.jpg'
const Banner = () => {
    return (
        <>
        <Row>
        <Col>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block  bannarImg"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption >
      <h1 className='pb-4'>Best Food Waiting for your belly</h1>
      <input type="text" name="" id="search" placeholder='Search Food' />
      <button className='Searcbtn'>Search</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  bannarImg"
      src={banner1}
      alt="Second slide"
    />

    <Carousel.Caption >
    <h1 className='pb-4'>Waiting for Food </h1>
    <input type="text" name="" id="search" placeholder='Search Food' />
    <button className='Searcbtn'>Search</button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  bannarImg"
      src={banner1}
      alt="Third slide"
    />

    <Carousel.Caption className='mb-4' >
      <h1 className='pb-4'>Eating Food and Enjoy</h1>
      <input type="text" name="" id="search" placeholder='Search Food' />
      <button className='Searcbtn'>Search</button>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</Col>
</Row>

        </>
    );
};

export default Banner;