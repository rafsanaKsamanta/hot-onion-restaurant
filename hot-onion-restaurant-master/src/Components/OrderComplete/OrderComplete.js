import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import map from './Map.png';
import './OrderComplete.css';
import biker from './Bike.png';
import helmetBike from './helmet.png';
import { UserContext } from '../../App';

const OrderComplete = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [user,setUser]=useContext(UserContext)

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <img src={map} className='mapRoad w-100' alt="100x100" />

                </Col>
                <Col md={2}></Col>

                <Col md={3}>
                    <div className='orderPart'>
                        <img src={biker} className='w-50 ml-4' alt="" />

                        <div className='bg-white rounded mt-3 p-2 '>
                            <h6>*Your Location</h6>
                            <p style={{ color: 'gray' }}>107 Rd No8</p>


                            <h6>*Shop Address</h6>
                            <p style={{ color: 'gray' }}>Gulshan Plaza Restaurant</p>


                        </div>

                        <h2>09:30</h2>
                        <p style={{ color: 'gray' }}>Estimated Delivery Time</p>

                        <Row style={{ backgroundColor: 'white', padding: '5%', borderRadius: '5%' }}>
                            <Col md={3}>
                                <img style={{ width: '180%', marginTop: '50%' }} src={helmetBike} alt="100*100" />

                            </Col>
                            <Col md={9}>
                                <h3>{loggedInUser.name}</h3>
                                <p style={{ color: 'gray' }}>Your Raider</p>
                            </Col>

                        </Row>

                        
                       {/* button contact  */}
                       <Button variant="danger mt-4" size="lg" block>Contact</Button>
                       


                    </div>



                </Col>

            </Row>

        </Container>
    );
};

export default OrderComplete;

