import React, { useEffect } from 'react';
import './Delivery.css'
import {useState} from 'react'
import DeliveryDeatils from '../DeliveryDeatils/DeliveryDeatils';
import { Container, Row } from 'react-bootstrap';
const Delivery = () => {
    const [services,setService]=useState([])
    useEffect(()=>{
            fetch('./Service.json')
            .then(res=>res.json())
            .then(data=>setService(data))

    },[])
    return (
        <div className='choose-us mt-5'>
           <Container>
               <h2>Why You Choose Us</h2>
               <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias quas aliquam esse, cumque minima labore suscipit, distinctio dolor nisi similique nobis fugiat ad. Minus quos error omnis eius et?</p>
               </Container>
            <Container>
                <Row xs={1} md={3} className="g-4">
             {
                 services.map(service=><DeliveryDeatils service={service}></DeliveryDeatils>)
             }
             </Row>
            </Container>
        </div>
    );
};

export default Delivery;