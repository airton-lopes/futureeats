import React from 'react'
import { useHistory } from "react-router-dom";
import { Image, Restaurante, TempoDeEntrega, TaxaDeEntrega, CardInfo } from '../CardFood/CardFoodStyle'


export default function CardFood(props) {
    const history = useHistory();
    
  const goToRestaurantDetail = (idx) => {
    history.push(`/restaurant/${idx}`)
  }

    return (
        <div>
            <CardInfo onClick={() => goToRestaurantDetail(props.restaurants.id)}>
                    {props.restaurants && <Image bg={props.restaurants.logoUrl} />}
                    <Restaurante>{props.restaurants.name}</Restaurante>
                    <TempoDeEntrega>{props.restaurants.deliveryTime} min</TempoDeEntrega>
                    <TaxaDeEntrega>Frete: R${props.restaurants.shipping.toFixed(2)}</TaxaDeEntrega>
                </CardInfo>
        </div>
    )
}