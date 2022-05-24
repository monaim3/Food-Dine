import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './Food.css'
const Food = (props) => {
    const { img, title, description, id, price } = props.singlefood;
    
  const history=useNavigate()
  const handlebtn=()=>{
      history(`/food/${id}`)
  }
    return (
        <>
        <div className="container" data-aos="fade-right" data-aos-duration="1000">
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
                         <Button onClick={handlebtn} style={{background:"#F91944",border:"none", borderRadius:"15px"}}>Buy And Eat</Button>
                    </Card.Body>

                </Card>
            </Col>
          
        </div>
        {/* <button style={{background:"#F91944",border:"none", borderRadius:"15px"}}>Procced Your Food</button> */}

        </>
    );
};

export default Food;