import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { Container, ContainerCartPayment, Titulo, BotaoConfirmar } from './CartPaymentStyle'

import { baseUrl } from  '../Restaurants/Restaurants'

import CartContext from '../../contexts/CartContext'

import {createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main:"#5cb646"
      }
    }
})

function CartPayment() {

    const cartContext = useContext(CartContext)
    const dispatch = cartContext.dispatch
    const [value, setValue] = useState("")
    const [order, setOrder] = useState([])

    useEffect(() => {
      window.localStorage.setItem("cart", JSON.stringify(cartContext.state.productsInCart))
      window.localStorage.setItem("restaurant", JSON.stringify(cartContext.state.restaurant))
      listOfOrder()
    }, [cartContext.state.productsInCart])

    const listOfOrder = () => {
      let array = []

      cartContext.state.productsInCart.forEach((product) => {
        const indice = {
          "id": product.id,
          "quantity": product.quantity
        }
        array.push(indice)
        setOrder(array)
      })
    }
  
    const handleChange = (event) => {
      setValue(event.target.value)
    }

    const onClickOrder = (value) => {
      if (value !== "") {
        postPlaceOrder()
      }
    }

      const postPlaceOrder = () => {
      const token = window.localStorage.getItem("token")
      const idDoRestaurante = cartContext.state.restaurant.id

      const body = {
        "products": order,
        "paymentMethod": `${value}`
      }

      console.log(body)

      axios.post(`${baseUrl}restaurants/${idDoRestaurante}/order`, body, {
        headers: {
          auth: token
        }
      })
      .then((response) => {
        setValue("")
        clearCart()
      })
      .catch((error) => {
        alert("Ops, você já pediu ou estamos com problema")
      })
    }

    const clearCart = () => {
      const clearCart = {
        type: "CLEAR_PRODUCTS_IN_CART",
      }
      dispatch(clearCart)
    }

    return (
        <MuiThemeProvider theme={tema}>
          <Container>
            <ContainerCartPayment>

              <FormControl component="fieldset">
                <Titulo>Forma de Pagamento</Titulo>
                <hr></hr>
                <RadioGroup data-testid="selecao" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                    <FormControlLabel data-testid="dinheiro" value="money" control={<Radio />} label="Dinheiro" />
                </RadioGroup>
              </FormControl>
              <BotaoConfirmar color="secondary" variant="contained" onClick={() => onClickOrder(value)}>Confirmar</BotaoConfirmar>
            </ContainerCartPayment>            
          </Container>
        </MuiThemeProvider>
    )
}

export default CartPayment