import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'
const Food = (props) => {
    const { img, title, description, id, price } = props.singlefood;
    
    
    return (
        <>
        <div className="container">
            <Col>
                <Card style={{ width: '18rem' ,textAlign:"center", border:"none", marginTop:"10%"}}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                       <Link to={`/foodDeatils/${id}`}> <Button style={{background:"#F91944",border:"none", borderRadius:"15px"}}>Buy And Eat</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        {/* <button style={{background:"#F91944",border:"none", borderRadius:"15px"}}>Procced Your Food</button> */}

        </>
    );
};

export default Food;