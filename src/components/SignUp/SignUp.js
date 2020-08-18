import React, { useContext, useReducer, useState } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import {Container, useStyles, Form } from './SignUpStyles';
import {UserContext}  from '../../contexts/UserInforContext'

import {initialState, FormValidationReducer} from '../../reducers/FormsValidationReducers'

import { TextField, Button, Typography, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default props =>{
    const classes = useStyles();
    const {userData, onChangeUserData, setUserData} = useContext(UserContext);
    const [state, dispatch] = useReducer(FormValidationReducer, initialState );
    const [errorApi, setErrorApi] = useState(false);
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
   
    const verifyInput = event =>{
        (event.target.name === 'cpf' || 'email' )  && setErrorApi(false);
        const action = {
            type: event.target.name,
            data: userData,
        }
        console.log(!state.password)
        dispatch(action);
    }

    const handleClickShowPassword = () =>{
        setShowPassword(!showPassword);
    }

    const createAccount = event =>{
        event.preventDefault();
        const action = {
            type: 'SIGN_UP',
            data: userData,
        }
        dispatch(action);
        if( !state.name && !state.email && !state.cpf && !state.password && !state.confirmPassword) {
            const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup'
            const body = {
                    name: userData.name,
                    email: userData.email,
                    cpf: userData.cpf,
                    password: userData.password,           
            }
            Axios.post(baseUrl,body)
            .then( response => {
                setUserData({
                    ...userData,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    cpf: response.data.user.cpf,
                    id: response.data.user.id,
                    token: response.data.token,  
                });
                localStorage.setItem('token',response.data.token);
                history.push('/SignUp/Addres');
            })
            .catch( error => {
                setErrorApi(!errorApi);
            })
    }
}

    return (
        <Container>
            <Typography className={classes.text}>Cadastrar</Typography>
            <Form className={classes.root} onSubmit={createAccount}>
                <TextField
                    onBlur={verifyInput} 
                    onChange={onChangeUserData}
                    value={userData.name}
                    error={state.name}
                    helperText={state.name && 'O nome deve conter no mínimo 3 letras'}
                    name='name'
                    variant='outlined'
                    label='Nome'
                    required
                    placeholder='Nome e sobrenome'
                    size='medium'
                />
                <TextField
                    onBlur={verifyInput}  
                    onChange={onChangeUserData}
                    value={userData.email}
                    error={state.email || errorApi}
                    helperText={state.email && 'email@gmail.com' || errorApi && 'Email ou CPF já cadastrados'}
                    name='email'
                    variant='outlined'
                    label='Email'
                    required
                    type='email'
                    placeholder='infoPlaceHolder'
                    size='medium'
                />
                <TextField
                    onBlur={verifyInput} 
                    onChange={onChangeUserData}
                    value={userData.cpf}
                    error={state.cpf || errorApi}
                    helperText={state.cpf && '000.000.000.00' || errorApi && 'Email ou CPF já cadastrados'}
                    name='cpf' 
                    variant='outlined'
                    label='CPF'
                    required
                    placeholder='000.000.000.00'
                    size='medium'
                />
                <TextField
                    onBlur={verifyInput} 
                    onChange={onChangeUserData}
                    value={userData.password}
                    name='password'
                    variant='outlined'
                    label='Senha'
                    required
                    type={ showPassword ? 'text' :  'password'}
                    placeholder='Mínimo 6 caracteres'
                    size='medium'
                    InputProps={{
                        endAdornment: <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      }}
                />
                <TextField
                    onBlur={verifyInput} 
                    onChange={onChangeUserData}
                    value={userData.ConfirmPassword}
                    error={state.confirmPassword}
                    helperText={state.confirmPassword && 'Deve ser a mesma que a anterior'}
                    name='confirmPassword' 
                    variant='outlined'
                    label='Confirmar'
                    required
                    type='password'
                    placeholder='Confirme a senha anterior'
                    size='medium'
                />
                <Button color={'primary'} variant='contained' type='submit'>CRIAR</Button>
            </Form>
        </Container>
    );
}