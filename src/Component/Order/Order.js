import React from 'react';
import './Order.css'
import order from '../../images/order.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Order = () => {
    return (
        <div className='order'>
            <img className='w-75' src={order} alt="" />

            <div className="">
            <Link to="/"><Button className='mt-3 text-center'>Go Back Home</Button></Link>
            </div>
        </div>
    );
};

export default Order;