import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import logo from '../../Images/logo2.png';
import './Header.css'
import cartLogo from './Path 1.png';
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {

    const [cart]=useContext(CartContext);
    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const totalFood=cart.reduce((sum,foodDetails)=>sum+foodDetails.count,0)


    function signOut(){
        firebase.auth().signOut()
        .then(()=>setLoggedInUser({
            
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            success: '',
            error:''

        })) 
        .catch(error=>console.log(error))
    }


    return (


        <Navbar collapseOnSelect expand="md" bg="white" variant="light" sticky="top">
            <Container fluid>
            <Navbar.Brand >
               <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
            </Navbar.Brand>

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto align-items-center">


                </Nav>
                <Nav>
      
                          <Link to="/checkout">
                          <Button variant="transparent m-0 p-0"> 
                               <h6 className='m-0 p-0'>{totalFood}</h6>
                                    <img  src={cartLogo} alt=""/>
                           </Button>
                          </Link>

                         {
                             loggedInUser.isSignedIn ?
                              <Button onClick={signOut} variant='danger ml-5'>SignOut ,{loggedInUser.name}</Button>:

                              <Link to='/login'><Button variant='danger ml-5'>Login</Button></Link>
                           
                         }
                         
                       
                   
                   
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>




    );
};

export default Header;


