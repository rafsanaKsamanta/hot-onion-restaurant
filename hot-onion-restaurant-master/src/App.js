import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foods from './Components/Foods/Foods';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Footer from './Components/Footer/Footer';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import CheckOut from './Components/Checkout/CheckOut';
import OrderComplete from './Components/OrderComplete/OrderComplete';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LogIn from './Components/LogIn/LogIn';


export const CartContext = createContext();
export const UserContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({

    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    message: '',

  })

  return (


    <CartContext.Provider value={[cart, setCart]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
      <Switch>


        <Route exact path="/">
          <Background></Background>
          <Foods></Foods>
          <ChooseUs></ChooseUs>
          <Footer></Footer>

        </Route>
      </Switch>

      <Route path="/foodDetails/:foodName">
        
        <FoodDetails></FoodDetails>

      </Route>

      
      
      <PrivateRoute path="/checkout">
        <CheckOut></CheckOut>

      </PrivateRoute>

      <Route path="/login">
       <LogIn></LogIn>

      </Route>

      


      <Route path='/orderComplete'>
        <OrderComplete></OrderComplete>
      </Route>



      </Router>
      </UserContext.Provider>
      </CartContext.Provider>
      
      

      
  );
}

export default App;
