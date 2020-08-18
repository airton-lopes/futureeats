import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerCartGeral, CartContainer } from './CartStyle'

import CartAddress from './CartAddress'
import CartRestaurant from './CartRestaurant'
import CartValues from './CartValues'
import CartPayment from './CartPayment'
import CartRenderProducts from './CartRenderProducts'
import FooterMenu from '../FooterMenu/FooterMenu'

function Cart() {

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])

    return(
        <ContainerCartGeral data-testid={"cart"}>
            <CartContainer>
                <CartAddress />
                <CartRestaurant />
                <CartRenderProducts /> 
                <CartValues />
                <CartPayment />
            </CartContainer>
            <FooterMenu />
        </ContainerCartGeral>
    )
}

export default Cart