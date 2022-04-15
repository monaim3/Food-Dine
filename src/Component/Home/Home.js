import React from 'react';
import Banner from '../Banner/Banner';
import Delivery from '../Delivery/Delivery';
import FoodDeatils from '../FoodDeatils/FoodDeatils';
import FoodsMenu from '../FoodsMenu/FoodsMenu';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodsMenu></FoodsMenu>
            <Delivery></Delivery>
            
        </div>
    );
};

export default Home;