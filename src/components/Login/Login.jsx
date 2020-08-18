import React, { useContext, useEffect }  from 'react';
import Axios from 'axios';

import {UserContext}  from '../../contexts/UserInforContext'

import {Container, useStyles, TextContainer, BottomTextContainer} from './LoginStyle'


import {Button, TextField, Typography} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login';

export default props =>{
    const history =  useHistory();
    const {userData, onChangeUserData, setUserData} = useContext(UserContext);
    const [userErro, setUserErro ] = useState(false);
    const [passwordErro, setPasswordErro ] = useState(false);
    const classes = useStyles(); 
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
    
        if (token !== null) {
          history.push("/home")
        }
      }, [history])
    
    const login = event =>{
        event.preventDefault();
        Axios.post(baseUrl, { email: userData.email, password: userData.password} )
            .then( response => {
        
                setUserData({
                    ...userData,
                    cpf: response.data.user.cpf,
                    email: response.data.user.email,
                    id: response.data.user.id,
                    name: response.data.user.name,
                });
                localStorage.setItem('token', response.data.token);
                history.push('/home');  
                setUserErro(false)
                setPasswordErro(false)
            })
            .catch( error => {
                console.log(error)
                setUserErro(true)
                setPasswordErro(true)
            });
    }

    const onChange = event =>{
        onChangeUserData(event);
        setUserErro(false);
        setPasswordErro(false);
    }

    return (
        <Container>
            <TextContainer>
                <Typography  className={classes.text}>Entrar</Typography>
            </TextContainer>    
            <form className={classes.root} onSubmit={login}>
                <TextField
                    error={userErro}
                    helperText={userErro ? "Email invalido" : ''}
                    label="Email:"
                    placeholder='email@email.com' 
                    variant="outlined"
                    required
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={onChange}
                />
                <TextField
                    error={passwordErro}
                    helperText={ passwordErro ? "Senha Incorreta" : ''}
                    label="Senha"
                    placeholder='Senha' 
                    variant="outlined"
                    required
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={onChange}
                />
                <Button
                    color='primary' 
                    variant='contained'
                    type='submmit'
                    >Logar</Button>
            </form>
                <BottomTextContainer>
                <Button onClick={() => history.push('/SignUp')}>
                    <Typography  className={classes.text}>Não possui cadastro? Clique aqui.</Typography>
                </Button>
                </BottomTextContainer>    
        </Container>
    );

}