import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useParams} from "react-router";
import Data from '../../../src/Food.json'
const FoodDeatils = () => {
    const {foodId}=useParams()
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch(`./Food.json/${foodId}`)
        .then(res => res.json())
        .then(data =>console.log(data))
    }, [])

    // const Deatils=Data.filter(item=> {foodId===item.id})
    //  setFood(Deatils)
        // console.log(selectfood)
    return (
        <div>
         <Container>
             <Row>
                 <Col> <h3>this is id {foodId}</h3> </Col>
                 <Col> </Col>
             </Row>
         </Container>
        </div>
    );
};

export default FoodDeatils;