import React from 'react';

import Address from '../components/Address/Address';
import Header from '../components/Header/Header';
import logo from '../img/logo-future-eats-invert.png'

import {ImgContainer, Container } from './styles/Adress';

export default props =>{


    return (
        <Container>
            <Header path={'/SignUp'}></Header>
            <Address></Address>
        </Container>
    );
}