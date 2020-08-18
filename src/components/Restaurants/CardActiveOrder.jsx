import React, {useState} from 'react'
import axios from 'axios'

import { ContainerCardActiveOrder, ContainerSchedule, ContainerInfoPedido, 
        Pedido, Restaurante, SubTotal} from './CardActiveOrderStyle'

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Schedule from '@material-ui/icons/Schedule'
import { useEffect } from 'react'

import { baseUrl } from  '../Restaurants/Restaurants'

const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main:"#0000FF"
      }
    }
  })

function CardActiveOrder() {

    const [infoPedido, setInfoPedido] = useState([])

    useEffect(() => {
      getActiveOrder()
    }, [])

    const getActiveOrder = () => {
      const token = window.localStorage.getItem("token")

      axios.get(`${baseUrl}active-order`, {
        headers: {
          auth: token
        }
      })
      .then((response) => {
        setInfoPedido(response.data.order)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
    
    const renderizaNaTela = () => {
      if (infoPedido !== null) {
        return (
            <MuiThemeProvider theme={tema}>
              <ContainerCardActiveOrder>
                  <ContainerSchedule>
                      <Schedule color="primary"/>
                  </ContainerSchedule>
                  <ContainerInfoPedido>
                      <Pedido>Pedido em Andamento</Pedido>
                      <Restaurante>{infoPedido.restaurantName}</Restaurante>
                      <SubTotal>Subtotal R${Number(infoPedido.totalPrice).toFixed(2)}</SubTotal>
                  </ContainerInfoPedido>
              </ContainerCardActiveOrder>
          </MuiThemeProvider>
        )
      }
    }

    return (
        <div>
          {renderizaNaTela()}
        </div>
    )
}

export default CardActiveOrder