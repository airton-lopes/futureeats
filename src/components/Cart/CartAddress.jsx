import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { ContainerCartAddress, TituloDoContainer, InfoAddress } from './CartAddressStyle'

import { UserContext } from '../../contexts/UserInforContext'

import { baseUrl } from '../Restaurants/Restaurants'

function CartAddress() {

    const userContext = useContext(UserContext)
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    
    useEffect(() => {
        getFullAddress()
    }, [])

    const getFullAddress = () => {
        const token = window.localStorage.getItem("token")

        axios.get(`${baseUrl}profile/address`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setNumber(response.data.address.number)
            setStreet(response.data.address.street)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <ContainerCartAddress>
            <TituloDoContainer>Endereço de entrega</TituloDoContainer>
            <InfoAddress data-testid={"address"}>{street}, {number}</InfoAddress>
        </ContainerCartAddress>
    )
}

export default CartAddress