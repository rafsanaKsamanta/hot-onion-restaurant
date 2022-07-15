import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import './Foods.css';




const breakfast = fakeData.filter(foods => foods.type === 'Breakfast')
const lunch = fakeData.filter(foods => foods.type === 'Lunch')
const dinner = fakeData.filter(foods => foods.type === 'Dinner')

const Foods = () => {

    const [cart]=useContext(CartContext)
   
   


    const newFood = type => {
        return (

            type.map(food =>



                <Col className='my-3' md={4}>

                   <Link className='foodLink' to={`/foodDetails/${food.name}`}> 
                   
                   <Card className="cardFood" style={{ width: '18rem', height: '100%' }}>
                        <Card.Img variant="top" className=" mx-auto p-2  w-50" src={food.images} />
                        <Card.Body className='align-items-center justify-content-center'>
                            <Card.Title className="text-center"><h4 style={{color: 'black'}}>{food.name}</h4></Card.Title>
                            <Card.Text className="text-center">
                                <p style={{color: 'black'}}>{food.shortDescription}</p>
                                <h6 style={{color: 'black'}}>$ {food.price}</h6>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                   </Link>

                </Col>








            )
        )
    }




    return (
        <Container>
            <Tabs style={{marginRight:'5%'}} className=' mt-4 justify-content-center border-0' defaultActiveKey="Lunch" transition={false} id="noanim-tab-example">


                <Tab eventKey="Breakfast" title="Breakfast">
                    <Row className='mt-3 ' >


                        {newFood(breakfast)}


                    </Row>

                </Tab>
                <Tab eventKey="Lunch" title="Lunch">
                    <Row className='mt-3'>

                        {newFood(lunch)}


                    </Row>

                </Tab>
                <Tab eventKey="Dinner" title="Dinner">
                    <Row className='mt-3 '>


                        {newFood(dinner)}



                    </Row>

                </Tab>
            </Tabs>
            <br/>
            <br/>


           <Row>
               <Col md={4}></Col>
               <Col md={4}> 

               {
                   cart.length>0 && 
                   
                   <Link to='/checkout'>
                   <Button variant='danger ml-5'>Checkout The Food</Button>
                   
                   </Link>
               }
              
                   
               </Col>
               <Col md={4}></Col>


           </Row>
        </Container>

    );
};

export default Foods;


