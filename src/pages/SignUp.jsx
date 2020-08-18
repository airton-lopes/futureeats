import React from 'react';

import SignUp from '../components/SignUp/SignUp';
import Header from '../components/Header/Header';
import logo from '../img/logo-future-eats-invert.png'

import {ImgContainer, Container } from './styles/SignUp';

export default props =>{


    return (
        <Container>
            <Header path={'/'}></Header>
            <ImgContainer>
                <img src={logo}/>
            </ImgContainer>
            <SignUp></SignUp>
        </Container>
    );
}