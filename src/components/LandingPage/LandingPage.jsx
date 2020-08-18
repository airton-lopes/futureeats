import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import LogoEats from '../../img/LogoWhite.png'

const BlackScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LandingPage() {
    const history = useHistory();


    const renderizaTela = () => {
        history.push("/login")
    }  
    
    useEffect(() => {
        setTimeout(renderizaTela, 3000)
    },[])

    return (
        <BlackScreen>
            <img src={LogoEats} />
        </BlackScreen>
    )
}