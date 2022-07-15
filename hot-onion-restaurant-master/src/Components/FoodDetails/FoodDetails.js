import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../App';
import fakeData from '../../fakeData/fakeData';


const FoodDetails = () => {
    const [cart, setCart] = useContext(CartContext)

    const { foodName } = useParams()
    const foodDetails = fakeData.find(fd => fd.name === foodName)

    // button increase decrease 

    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    if (count < 1) {
        setCount(1)
    }

    const [disabled, setDisabled] = useState(false)
    
    function addToCart() {
        setDisabled(true)

        foodDetails.count = count;
        setCart([...cart, foodDetails])

    }

    return (
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col md={6} className="text-left">

                    <h2>{foodDetails.name}</h2>
                    <p>{foodDetails.fullDescription}</p>
                    <h3>$ {(foodDetails.price * count).toFixed(2)}</h3>

                    <br></br>

                    <Button variant='danger' onClick={decrease}>-</Button>
                    <span className='ml-1 mr-1'> {count} </span>

                    <Button variant='danger' onClick={increase}>+</Button>


                    <br></br>
                    <Link to="/">
                        <Button variant='outline-info' className='mt-5 mr-3'>Back</Button>
                    </Link>


                    <Button disabled={disabled} onClick={() => addToCart(foodDetails.name)} variant='outline-success' className='mt-5 ml-3'>{disabled ? "Added" : "Add"}</Button>

                </Col>

                <Col md={6}>

                    <img src={foodDetails.images} className="w-100 mt-5" alt="" />
                   

                </Col>
            </Row>





        </Container>



    );
};

export default FoodDetails;