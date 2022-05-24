import React, { useEffect, useState } from 'react';
import './Shipping.css'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Shipping.css'
import food from '../../Food.json'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
const Shipping = () => {
   const {user}=useAuth()
    const [ship, setShip] = useState([])
    const [value,setValue]=useState(0)
    const [price, setPrice]=useState(0)
    const [tax,setTax]=useState(0)
    const [delivery, setDelivery]=useState(0)
    const [total,setTotal]=useState(0)
    const { shipId } = useParams()
    const [userrecord,setUserrecord]=useState({
        fristName:'',
        lastName:'',
        email:'',
        address:'',
        flatNo:"",
        deliveryInstructor:'',
    })
    useEffect(() => {
        fetch('../../Food.json')
            .then(res => res.json())
            .then(data => setShip(data))
    }, [])
    const shipItem = food.find(el => {

        return shipId == el.id
    })

    const handleIncrement =()=>{
        const oldvalue=value+1;
      setValue((prevaious)=>prevaious+1)
      
    }
    const handleDecrement=()=>{
       if(value>0){
           let oldvalue=value-1;
           setValue((prevaious)=>prevaious-1)
       }
   
    }
    const priceHandle=()=>{
       const shipItems=parseFloat(shipItem.price)*value;
       setPrice(shipItems.toFixed(2));
       
    }
    const taxhandle =()=>{
       
        const taxs=parseFloat(price*0.1)
        setTax(taxs.toFixed(2))
        
        // else if(value==0){
        //     setTax(0)
        // }
    }
    const deliverhandle=()=>{
        if(value>0){
            setDelivery(50)
        }
        else if(value==0){
            setDelivery(0)
        }
    }
    const totalhandle=()=>{
        let totals=0
        totals=parseFloat(price)+parseFloat(tax)+50;
        console.log('tax', tax)
        console.log('price',price)
        console.log("total",totals)
        setTotal(totals)
   
    //    else if (value==0){
    //        setTotal(0)
    //    }
    }
    useEffect(()=>{
         priceHandle()
         taxhandle()
         deliverhandle()
         totalhandle()
    },[value,price,tax])
    const handleform=(e)=>{
          const name=e.target.name
          const value=e.target.value
          setUserrecord({...userrecord,[name]:value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const {fristName,lastName,email, address,flatNo, deliveryInstructor}=userrecord;
        if(fristName && lastName && email && address && flatNo &&deliveryInstructor){
       const response= fetch('https://red-onion-69ca0-default-rtdb.firebaseio.com/userData.json',
       {
           method:"POST",
           headers:{
               "Content-Type":"application/json",
           },
           body:JSON.stringify({
            fristName,
            lastName,
            email,
            address,
            flatNo,
            deliveryInstructor
           })
       }

       );
       if(response){
           setUserrecord({
            fristName:'',
            lastName:'',
            email:'',
            address:'',
            flatNo:"",
            deliveryInstructor:'',
           })
           alert('Data stored')
       }
       else{
           alert('fill all the data')
       }
    }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col >
                        <div className="shipping mt-5">
                            <h1>Edit Delivery Deatils</h1>
                            <hr />
                            <Form method='POST'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" name='fristName' onChange={handleform} value={user.displayName} placeholder="Enter Your first Name" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" onChange={handleform} name="lastName" value={userrecord.lastName} placeholder="enter Your last Name" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" onChange={handleform} name="email" value={user.email} placeholder="email" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" onChange={handleform} name="address" value={userrecord.address} placeholder="Address" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" onChange={handleform} name="flatNo" value={userrecord.flatNo} placeholder="Flat No" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">

                                    <Form.Control type="text" onChange={handleform} name="deliveryInstructor" value={userrecord.deliveryInstructor}  placeholder="Add Deliver Instructor" />

                                </Form.Group>

                                <Button onClick={submitForm} className="w-100 save mb-5" type="submit">
                                    Save and Continue
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col className='ms-5' >
                        <div className='shippin-address mt-5'>
                            <h3>From Gulshan Plaza</h3>
                            <h6>Arriving 20-30 Minute</h6>
                            <h6>107 Road No 8</h6>
                            <Row className="mt-4 card-wrapper">

                                <Col xs={12} md={3} >
                                    <img className="shipImg" src={shipItem.img} alt="" />
                                </Col>
                                <Col xs={12} md={3} className="shipItem">
                                    <h6>{shipItem.title}</h6>
                                    <h5>{price}</h5>
                                    <p>Deliver free</p>

                                </Col>
                                <Col xs={12} md={5} >
                                    <div className="incre">
                                        <i onClick={handleIncrement} className="fa-solid fa-plus"></i>
                                        <span className='value'> {value}</span>
                                        <i onClick={handleDecrement} className="fa-solid fa-minus"></i>
                                    </div>
                                </Col>

                                </Row>
                               
                           <Row className='mt-4'>
                               <Col xs={6}>
                                 <h5>Subtotal</h5>
                                 <h5>Tax</h5>
                                 <h5>Delivery fee</h5>
                                 <h4>Total</h4>
                                 
                               </Col>
                               <Col xs={6} >
                                <h4>${price}</h4>
                                <h4>${tax}</h4>
                                <h4>${delivery}</h4>
                                <h4>${total}</h4>
                               </Col>
                               <Link to="/Order"><Button className='mb-4 w-100 place'>Place Order</Button></Link>
                           </Row>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Shipping;
