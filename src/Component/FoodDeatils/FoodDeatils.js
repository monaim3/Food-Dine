import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolidfaCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {useParams} from "react-router";
import food from '../../Food.json'
import './FoodDeatils.css'
import { useNavigate } from 'react-router-dom';
const FoodDeatils = () => {
    const [foods,setFood]=useState([])
     
    const {foodId}=useParams()
    useEffect(() => {
        fetch('../../Food.json')
        .then(res=> res.json())
        .then(data=> setFood(data))
    }, [])
    const uniqueItem=food.find(el=>{

   return foodId==el.id
    })
    const history=useNavigate()
    const handleaddbtn=()=>{
        history(`/shipping/${uniqueItem.id}`)
    }
    return (
        <div>
         <Container>
             <Row>
                 <Col> 
                   <div className="content-area">
                    <h1>{uniqueItem.title}</h1>
                    <p>{uniqueItem.description}</p>
                    <div className="wrapper d-flex">
                    <div className="price">
                     <span className='h1'>${uniqueItem.price}</span>
                     </div>
                     <div className="icon">
                     <span className='ms-4'><button><i class="fa-solid fa-plus"></i></button>1 <button><i class="fa-solid fa-minus"></i></button></span>
                     </div>
                    </div>
                    <br></br>
                     <button onClick={handleaddbtn} className='add'><i class="fa-solid fa-cart-arrow-down"></i> Add</button>       
                   </div>
                  </Col>
                 <Col> <img className="food" src={uniqueItem.img} alt="" /> </Col>
             </Row>
         </Container>
        </div>
    );
};

export default FoodDeatils;