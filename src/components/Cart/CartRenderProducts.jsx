import React, { useContext, useReducer, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { BotaoRemover, Quantidade, ContainerCart, ContainerCarrinhoVazio } from './CartStyle'
import { ContainerProduct, ImagemDoProduto, ContainerInfoProduct, TituloDoProduto, DescricaoDoProduto, PrecoDoProduto } from '../Restaurants/CardProductsStyle'

import CartContext from '../../contexts/CartContext'

function CartRenderProducts() {

    const cartContext = useContext(CartContext)
    const dispatch = cartContext.dispatch
    const history = useHistory()

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cartContext.state.productsInCart))
        window.localStorage.setItem("restaurant", JSON.stringify(cartContext.state.restaurant))
    }, [cartContext.state.productsInCart])
    
    const onClickRemoveProduct = (product) => {
        const removeProduct = {
            type: "RM_PRODUCT_IN_CART",
            product: product 
        }
        dispatch(removeProduct)
    }

    const renderizaNaTela = () => {
        if (cartContext.state.productsInCart.length === 0){
            return (
                <ContainerCarrinhoVazio>
                    Carrinho vazio
                </ContainerCarrinhoVazio>
            )
        } else {
            return (
                <ContainerCart>
                    {cartContext.state.productsInCart.map((product) => {
                        return (
                            <ContainerProduct key={product.id}>
                                <div>
                                    <ImagemDoProduto src={product.photoUrl}></ImagemDoProduto>
                                </div>
                                <ContainerInfoProduct>
                                    <TituloDoProduto>{product.name}</TituloDoProduto>
                                    <DescricaoDoProduto>{product.description}</DescricaoDoProduto>
                                    <PrecoDoProduto>R$ {product.price.toFixed(2)}</PrecoDoProduto>
                                </ContainerInfoProduct>
                                <div>
                                    <Quantidade>{product.quantity}</Quantidade>
                                    <BotaoRemover onClick={() => onClickRemoveProduct(product)}>Remover</BotaoRemover>
                                </div>
                            </ContainerProduct>
                        )
                    })}
                </ContainerCart>
            )
        }
    }

    return (
        <div>
            {renderizaNaTela()}
        </div>
    )
}

export default CartRenderProducts