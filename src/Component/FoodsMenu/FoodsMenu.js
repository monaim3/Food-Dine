import React, { useEffect } from 'react';
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Food from '../Food/Food';
import Data from '../../../src/Food.json'
const FoodsMenu = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('./Food.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    const filterItem = (item) => {
        const filter = Data.filter(ele => item === ele.category)
        setFood(filter)
    }
    return (
        <div>
            <div className="row">
                <div className=" col-lg-8 mx-auto d-flex justify-content-evenly my-2 sortBtn flex-wrap">
                    <button className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" onClick={() => filterItem('breakfast')}>Breakfast
                    </button>
                    <button className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" onClick={() => filterItem('lunch')}>Lunch
                    </button>
                    <button className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" onClick={() => filterItem('dinner')}>Dinner
                    </button>

                </div>

                <div className="foods-menu">
                    <Container>
                        <Row xs={1} md={3} className="g-4">
                            {
                                food.map(singlefood => <Food singlefood={singlefood} key={singlefood.id}></Food>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default FoodsMenu;