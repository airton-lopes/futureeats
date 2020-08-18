import React from 'react';

import logo from '../img/logo-future-eats-invert.png'
import Login from '../components/Login/Login'
import {Container, ImgContainer} from './styles/Login'



export default props =>{

    return (
        <Container>
            <ImgContainer>
                <img src={logo}></img>
            </ImgContainer>
            <Login />
        </Container>
    );

}