import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import Restaurants from './Restaurants'
import CardRestaurant from './CardRestaurant'
import CardProducts from './CardProducts'
import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'
import RestaurantListProducts from '../../contexts/RestaurantListProductsContext'
import CartContext from '../../contexts/CartContext'

axios.get = jest.fn().mockResolvedValue({
    data: []
})

describe("Renderização da lista de produtos de um restaurant", () => {

    test("Deve aparecer a lista de produtos do restaurante", async () => {

        const dispatch = () => {
            console.log("teste")
        }

        const state = {
            restaurantProducts: [
                {
                    "id": "3vcYYSOEf8dKeTPd7vHe",
                    "name": "Pastel",
                    "category": "Pastel",
                    "price": 3,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
                    "description": "Pastel autêntico, feito na hora!",
                },
                {
                    "id": "5omTFSOBYiTqeiDwhiBx",
                    "category": "Salgado",
                    "price": 1,
                    "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
                    "name": "Bibsfiha queijo",
                    "description": "Esfiha deliciosa, receita secreta do Habibs.",
                },
            ],
            restaurantDetails: [
                {
                    "id": "1",
                    "shipping": 6,
                    "category": "Árabe",
                    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                    "deliveryTime": 60,
                    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    "name": "Habibs",
                    "address": "Rua das Margaridas, 110 - Jardim das Flores"
                }
            ],
            productsInCart: []
        }

        /*axios.get = jest.fn().mockResolvedValue({
            data: [{
                restaurantProducts: [
                    {
                        "id": "3vcYYSOEf8dKeTPd7vHe",
                        "name": "Pastel",
                        "category": "Pastel",
                        "price": 3,
                        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
                        "description": "Pastel autêntico, feito na hora!",
                    },
                    {
                        "id": "5omTFSOBYiTqeiDwhiBx",
                        "category": "Salgado",
                        "price": 1,
                        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
                        "name": "Bibsfiha queijo",
                        "description": "Esfiha deliciosa, receita secreta do Habibs.",
                    },
                ],
                restaurantDetails:
                    {
                        "id": "1",
                        "shipping": 6,
                        "category": "Árabe",
                        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                        "deliveryTime": 60,
                        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                        "name": "Habibs",
                        "address": "Rua das Margaridas, 110 - Jardim das Flores"
                    }
            }]
        })*/

        const tree = (
            <CartContext.Provider value={{state, dispatch}}>
                <RestaurantDetailsContext.Provider value={state.restaurantDetails}>
                    <RestaurantListProducts.Provider value={state.restaurantProducts}>
                        <CardProducts />
                    </RestaurantListProducts.Provider>
                </RestaurantDetailsContext.Provider>
            </CartContext.Provider>   
            
        )

        const { getByText, getAllByText } =  render ( tree )

        const nome = getByText(/Habibs/)
        const produto = getAllByText(/Pastel/)
        const button = getAllByText(/Adicionar/)

        expect(nome).toBeInTheDocument
        expect(produto).toBeInTheDocument
        expect(button).toBeInTheDocument

    })

    
})