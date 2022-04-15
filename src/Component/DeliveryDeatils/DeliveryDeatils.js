import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './DeliveryDeatils.css'
const DeliveryDeatils = (props) => {
    const {img,Delivery,description,id}=props.service
    return (
        <div>
            <Col>
            
            <Card style={{ width: '18rem' ,textAlign:"center", border:"none", marginTop:"10%"}}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Delivery}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        
                        <Button style={{background:"#F91944",border:"none", borderRadius:"15px"}}>See More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DeliveryDeatils;