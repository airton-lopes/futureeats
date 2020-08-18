import React, { useContext } from 'react'

import { ContainerRestaurante, ContainerValores, LogoDoRestaurante, NomeDoRestaurante, InfoDoRestaurante } from './CardRestaurantStyle'

import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'

function CardRestaurant() {

    const restaurantDetails = useContext(RestaurantDetailsContext)

    return (
        <ContainerRestaurante>
            <LogoDoRestaurante src={restaurantDetails.logoUrl}></LogoDoRestaurante>
            <NomeDoRestaurante>{restaurantDetails.name}</NomeDoRestaurante>
            <InfoDoRestaurante>{restaurantDetails.category}</InfoDoRestaurante>
            <ContainerValores>
                <InfoDoRestaurante>{restaurantDetails.deliveryTime} min</InfoDoRestaurante>
                <InfoDoRestaurante>Frete R$ {Number(restaurantDetails.shipping).toFixed(2)}</InfoDoRestaurante>
            </ContainerValores>
            <InfoDoRestaurante>{restaurantDetails.address}</InfoDoRestaurante>
        </ContainerRestaurante>
    )

}

export default CardRestaurant