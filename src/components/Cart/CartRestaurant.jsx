import React, { useContext, useEffect } from 'react'

import { ContainerRestaurante, NomeDoRestaurante, InfoDoRestaurante } from '../Restaurants/CardRestaurantStyle'

import CartContext from '../../contexts/CartContext'

function CardRestaurant() {

    const cartContext = useContext(CartContext)

    return (
        <ContainerRestaurante>
            <NomeDoRestaurante>{cartContext.state.restaurant.name}</NomeDoRestaurante>
            <InfoDoRestaurante>{cartContext.state.restaurant.address}</InfoDoRestaurante>
            <InfoDoRestaurante>{cartContext.state.restaurant.deliveryTime}</InfoDoRestaurante>
        </ContainerRestaurante>
    )
}

export default CardRestaurant