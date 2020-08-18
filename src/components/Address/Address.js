import React, { useContext, useEffect, useReducer } from 'react'
import Axios from 'axios';

import {Container, useStyles, Form } from './AddressStyle';
import {UserContext}  from '../../contexts/UserInforContext'

import {initialState, FormValidationReducer} from '../../reducers/FormsValidationReducers'

import { TextField, Button, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address';

export default props =>{
    const classes = useStyles();
    const history = useHistory();
    const {userData, onChangeUserData, setUserData} = useContext(UserContext);
    const [state, dispatch] = useReducer(FormValidationReducer, initialState);
    const token = localStorage.getItem('token');

   const addAddres = event =>{
        event.preventDefault();
       const body = {
        street: userData.street,
        number: userData.number,
        neighbourhood: userData.neighbourhood,
        city: userData.city,
        state: userData.state,
        complement: userData.complement,
       }
       const auth  = {
        headers: {
            auth: token,
        }
    }  
        Axios.put(baseUrl, body, auth )
        .then( response => {
            setUserData({
                address:  response.data.user.address,
                cpf: response.data.user.cpf,
                email: response.data.user.email,
                hasAddress: response.data.user.hasAddress,
                id: response.data.user.id,
                name: response.data.user.name,
            });
            localStorage.setItem('token', response.data.token);
            history.push('/home');
        })
        .catch( error => {
            console.log(error)
        })
   }

    return (
        <Container>
            <Typography className={classes.text}>Meu endereço</Typography>
            <Form className={classes.root} onSubmit={addAddres}>
                <TextField 
                    onChange={onChangeUserData}
                    value={userData.street}
                    error={state.street}
                    name='street'
                    variant='outlined'
                    label='logradouro'
                    required
                    placeholder='Rua / Av.'
                    size='medium'
                />
                <TextField 
                    onChange={onChangeUserData}
                    value={userData.number}
                    name='number'
                    variant='outlined'
                    label='Número'
                    required
                    type='number'
                    placeholder='Número'
                    size='medium'
                />
                <TextField
                    onChange={onChangeUserData}
                    value={userData.complement}
                    name='complement' 
                    variant='outlined'
                    label='Complemento'
                    placeholder='Apto. / Bloco'
                    size='medium'
                />
                <TextField  
                    onChange={onChangeUserData}
                    value={userData.neighbourhood}
                    name='neighbourhood'
                    variant='outlined'
                    label='Bairro'
                    required
                    placeholder='Bairro'
                    size='medium'
                />
                <TextField
                    onChange={onChangeUserData}
                    value={userData.city}
                    name='city' 
                    variant='outlined'
                    label='Cidade'
                    required
                    placeholder='Cidade'
                    size='medium'
                />
                <TextField
                    onChange={onChangeUserData}
                    value={userData.state}
                    name='state' 
                    variant='outlined'
                    label='Estado'
                    required
                    max='2'
                    placeholder='Estado'
                    size='medium'
                />
                <Button color={'primary'} variant='contained' type='submit'>Salvar</Button>
            </Form>
        </Container>
    );
}