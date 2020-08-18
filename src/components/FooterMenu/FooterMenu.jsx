import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const FooterContainer = styled.div`
    height: 6vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid lightgray;
`
const HomeIconActive = styled(HomeOutlinedIcon)`
    color: #5cb646;
`
const ShoppingIconActive = styled(ShoppingCartOutlinedIcon)`
    color: #5cb646;
`
const PersonIconActive = styled(PersonOutlineOutlinedIcon)`
    color: #5cb646;
`

export default function FooterMenu() {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/home")
    }
    const goToCartPage = () => {
        history.push("/cart")
        }
    const goToProfilePage = () => {
        history.push("/profile")
    }

    return (
        <FooterContainer>
                {history.location.pathname === "/home" ? <HomeIconActive onClick={() => goToHomePage()} /> : <HomeOutlinedIcon color={'disabled'} onClick={() => goToHomePage()} />}
                {history.location.pathname === "/cart" ? <ShoppingIconActive onClick={() => goToCartPage()} /> : <ShoppingCartOutlinedIcon color={'disabled'} onClick={() => goToCartPage()} />}
                {history.location.pathname === "/profile" ? <PersonIconActive onClick={() => goToProfilePage()} /> : <PersonOutlineOutlinedIcon color={'disabled'}  onClick={() => goToProfilePage()} /> }
        </FooterContainer>
    )
}