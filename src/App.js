import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Address from './pages/Address';
import LandingPage from './components/LandingPage/LandingPage';


import {UserContext, useUserInfo} from './contexts/UserInforContext'
import CartContext from './contexts/CartContext'

import { initialState, CartReducer } from './reducers/CartReducer'

import Restaurants from './components/Restaurants/Restaurants'
import Cart from './components/Cart/Cart'
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  const {userData, onChangeUserData, setUserData} = useUserInfo();
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <UserContext.Provider value={{userData, onChangeUserData,setUserData}} >     
      <CartContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/">
              <LandingPage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signUp/addres">
                <Address />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/restaurant/:id">
                <Restaurants />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/">
                <div>Opa! Erro 404!</div>
              </Route>
            </Switch>
          </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App