import React from 'react';
import { Container } from 'react-bootstrap';
import './Background.css';
import logo from '../../Images/logo2.png'


const Background = () => {
    return (
       
        <section className='banner d-flex align-items-center text-center'>

            <Container>

                <img style={{marginRight: "7%", marginBottom:" 4%"}} src={logo} width='400px' alt=""/>
                                               
                <br/>
               



            <h1>Best Food is Waiting For You</h1>
            <br></br>

            <input className="inputSearch" type="text" placeholder=" Search the food....."/>
            <button className="btn btn-danger">Search</button>
           
            </Container>

            



        </section>
    );
};

export default Background;