import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../Images/logo.png';

const Footer = () => {
    return (

        <Container fluid>
            <Row className='mt-5' style={{ backgroundColor: '#191919' }}>




                <Col md={6}>
                    <img className='mt-5 ml-5' src={footerLogo} style={{ width: "30%" }} alt="" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                   


                </Col>




                <Col style={{ color: "white" }} className="mt-5" md={3}>
                    <p>About Online Food</p>
                    <p> Read Our Blog</p>

                    <p>Sign Up To Deliver</p>

                    <p>Add Your Restaurant</p>

                </Col>


                <Col style={{ color: 'white' }} className='mt-5' md={3}>

                    <p>Get Help</p>
                    <p> Read FAQs</p>

                    <p>View All Cities</p>

                    <p>Restaurants Near Me</p>
                </Col>


            </Row>

            <Row style={{ backgroundColor: '#191919' }}>

                <Col md={6}>
                <p className='ml-5' style={{ color: "#666666" }}>Copyright © Red-Onion Food</p>
                    <br />
                    <br />
                    <br />
                </Col>


                <Col style={{ color: "white"}} md={2}>
                <p>Private Policy</p>


                </Col>

                <Col md={2} style={{ color: "white"}}> 
                 <p>Terms Of Use</p>   
                
                </Col>

                <Col md={2} style={{ color: "white"}}> 
                 <p>Pricing</p>   
                
                </Col>



            </Row>
        </Container>
    );
};

export default Footer;

