import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import './Checkout.css';

const CheckOut = () => {

    const [loggedInUser]=useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);



    const foodItem = cart.reduce((sum, foodDetails) => sum + foodDetails.count, 0);

    const total = cart.reduce((sum, foodDetails) => sum + foodDetails.price, 0);

    // item remove 

    function removeFood(name) {
        const newFood = cart.filter(foodDetails => foodDetails.name !== name);
        setCart(newFood);
    }




    return (
        <Container>
            {
                cart.length>0 ? 
                <Row>


                <Col className='mt-5' md={6}>
                    <h3 className='checkoutDetails'>Edit Delivery Details</h3>

                    <hr />

                    <Form >
                        <Form.Group controlId="formBasicText">

                            <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="order" placeholder="Order Process" required />

                        </Form.Group>

                        <Form.Group controlId="formBasicAddress">

                            <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="address" placeholder="Address" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">

                            <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="add delivery instructor" placeholder="Add Delivery Instructor" required />

                        </Form.Group>

                        <Form.Group controlId="formBasicText">

                            <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="flat,suite or floor" placeholder="Flat,suite or floor" required />

                        </Form.Group>

                        <Form.Group controlId="formBasicText">

                            <Form.Control style={{ backgroundColor: '#F5F5F5', border: 'none' }} type="business name" placeholder="Business Name" required />

                        </Form.Group>

                        <Button size='lg' block style={{ backgroundColor: "#F91944", border: 'none' }} type="submit">
                            Save And Continue
                        </Button>
                    </Form>

                </Col>
                <Col md={2}></Col>

                <Col className='mt-5' md={4}>

                    <span>From <b>Gulshan Plaza Restaurant</b></span>

                    <p>Arriving in 20-30 minutes</p>
                    <span>107 Road No 8</span>

                    {
                        cart.map(foodDetails =>

                            <Row style={{ backgroundColor: '#F5F5F5', marginTop: '10%', borderRadius: '10px' }}>
                                <Col className='p-2' md={4}>
                                    <img className='w-100 mt-4' src={foodDetails.images} alt="" />
                                </Col>
                                <Col className='mt-3 p-3' md={8}>
                                    <h5>{foodDetails.name}</h5>
                                    <h3 style={{ color: "#F91944" }}>$ {foodDetails.price}</h3>
                                    <h6>Amount: {foodDetails.count}</h6>
                                    <h4>Cost:$ {(foodDetails.count * foodDetails.price).toFixed(2)}</h4>
                                    <br></br>

                                    <Button onClick={() => removeFood(foodDetails.name)} variant='danger'>Remove</Button>
                                </Col>

                            </Row>

                        )
                    }

                   

                            <Row className='mt-5 bg-light'>
                                <Col md={6}>
                                    <h5>Subtotal:</h5>
                                    <h5>Tax:</h5>
                                    <h5>Delivery:</h5>
                                    <h5>Total Cost:</h5>

                                </Col>
                                <Col md={6}>
                                    <h5>$ {(total * foodItem).toFixed(2)}</h5>
                                    <h5>$3</h5>
                                    <h5>$2</h5>
                                    <h5>${((total * foodItem) + 5).toFixed(2)}</h5>


                                </Col>
                                

                                <Link class="btn btn-danger mt-5 mb-5 btn-lg btn-block border-0" to='/orderComplete'>
                                <button class="btn btn-danger mx-0 btn-lg btn-block border-0" type="button" >Place Order</button>
                                </Link>

                            </Row>
                </Col>

            </Row>

            : <h1 className='text-center mt-5'>"At First Add Food to Cart"</h1>





            }


            
        </Container>
    );
};

export default CheckOut;