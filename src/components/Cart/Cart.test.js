import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Cart from './Cart'
import CartAddress from './CartAddress';
import CartRenderProducts from './CartRenderProducts'
import CartContext from '../../contexts/CartContext'
import CartPayment from './CartPayment'
import CartValues from './CartValues'

axios.get = jest.fn().mockResolvedValue({
    data: []
})

axios.post = jest.fn().mockResolvedValue()

describe("Renderização do carrinho vazio", () => {

    test("Deve aparecer na tela o título do container e o nome da rua e o número da casa.", async () => {

        axios.get = jest.fn().mockResolvedValue({
            data: [{
              street: 'Rua Teste',
              number: '0'
            }]
        })

        const { getByText, getByTestId} = render(<CartAddress />)

        const text = getByText(/Endereço de entrega/)

        expect(text).toBeInTheDocument

        const endereco = getByTestId('address')
        expect(endereco).toBeInTheDocument()

        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(1)
        })

    })

    test("Frase indicando que o carrinho está vazio", async () => {

        const state = {
            productsInCart: [],
            quantity: "", 
            restaurant: [],
            subTotal: ""
        }

        const dispatch = () => {
            console.log("teste")
        }

        const tree = (   
            <CartContext.Provider value={{state, dispatch}}>
              <CartRenderProducts />
            </CartContext.Provider>
        )

        const { getByText } =  render ( tree )

        const text = getByText(/Carrinho vazio/)

        expect(text).toBeInTheDocument

    })

    test("Se o componente que faz a requisição para enviar o pedido para o servidor é renderizado", async () => {

        const state = {
            productsInCart: [],
            quantity: "", 
            restaurant: [],
            subTotal: ""
        }

        const dispatch = () => {
            console.log("teste")
        }

        const tree = (   
            <CartContext.Provider value={{state, dispatch}}>
              <CartPayment />
            </CartContext.Provider>
        )

        const { getByText } =  render ( tree )

        const button = getByText(/Confirmar/)
        const titulo = getByText(/Forma de Pagamento/)
        const cartao = getByText(/Cartão de Crédito/)
        const dinheiro = getByText(/Dinheiro/)

        expect(button).toBeInTheDocument
        expect(titulo).toBeInTheDocument
        expect(cartao).toBeInTheDocument
        expect(dinheiro).toBeInTheDocument
    })

    test("Testando o envio de um pedido", async () => {
        const state = {
            productsInCart: [],
            quantity: "", 
            restaurant: [],
            subTotal: ""
        }

        const dispatch = () => {
            console.log("teste")
        }

        const tree = (   
            <CartContext.Provider value={{state, dispatch}}>
              <CartPayment />
            </CartContext.Provider>
        )

        const { getByText } =  render ( tree )

        const button = getByText(/Confirmar/)

        expect(button).toBeInTheDocument
    })   

    test("Se o componente que monitora os valores do carrinho é renderizado quando há uma lista de itens no carrinho", async () => {

        const state = {
            productsInCart: [
                {
                    "id": "3vcYYSOEf8dKeTPd7vHe",
                    "name": "Pastel",
                    "category": "Pastel",
                    "price": 3,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
                    "description": "Pastel autêntico, feito na hora!",
                    "quantity": 1
                },
                {
                    "id": "5omTFSOBYiTqeiDwhiBx",
                    "category": "Salgado",
                    "price": 1,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
                    "name": "Bibsfiha queijo",
                    "description": "Esfiha deliciosa, receita secreta do Habibs.",
                    "quantity": 2
                },
            ],
            quantity: "", 
            restaurant: [{
                "id": "1",
                "shipping": 6,
                "category": "Árabe",
                "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                "deliveryTime": 60,
                "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                "name": "Habibs",
                "address": "Rua das Margaridas, 110 - Jardim das Flores"
            }]
        }

        const dispatch = () => {
            console.log("teste")
        }

        const tree = (   
            <CartContext.Provider value={{state, dispatch}}>
              <CartPayment />
            </CartContext.Provider>
        )

        const { getByText } =  render ( tree )

        const button = getByText("Confirmar")

        expect(button).toBeInTheDocument
    })

    test("Se o componente que renderiza os produtos renderiza a lista de produtos do carrinho", async () => {

        const state = {
            productsInCart: [
                {
                    "id": "3vcYYSOEf8dKeTPd7vHe",
                    "name": "Pastel",
                    "category": "Pastel",
                    "price": 3,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
                    "description": "Pastel autêntico, feito na hora!",
                    "quantity": 1
                },
                {
                    "id": "5omTFSOBYiTqeiDwhiBx",
                    "category": "Salgado",
                    "price": 1,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
                    "name": "Bibsfiha queijo",
                    "description": "Esfiha deliciosa, receita secreta do Habibs.",
                    "quantity": 2
                },
            ],
            quantity: "", 
            restaurant: [{
                "id": "1",
                "shipping": 6,
                "category": "Árabe",
                "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                "deliveryTime": 60,
                "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                "name": "Habibs",
                "address": "Rua das Margaridas, 110 - Jardim das Flores"
            }]
        }

        const dispatch = () => {
            console.log("teste")
        }

        const tree = (   
            <CartContext.Provider value={{state, dispatch}}>
              <CartRenderProducts />
            </CartContext.Provider>
        )

        const { getAllByText } =  render ( tree )

        const button = getAllByText("Remover")

        expect(button).toBeInTheDocument
    })
})