if (localStorage.getItem("cart") === null) {
    window.localStorage.setItem("cart", JSON.stringify([]))
    window.localStorage.setItem("restaurant", JSON.stringify([]))
}

const cart = JSON.parse(localStorage.getItem("cart"))
const restaurant = JSON.parse(localStorage.getItem("restaurant"))

export const initialState = {
    productsInCart: cart,
    quantity: "", 
    restaurant: restaurant,
    subTotal: ""
}

export const CartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_PRODUCT_TO_CART":
            const productIncart = state.productsInCart.findIndex((product) => {
                return product.id === action.product.id
            })

            let newCart

            if (productIncart === -1) {
                newCart = [...state.productsInCart, { ...action.product, quantity: action.quantity}]
            } else {
                newCart = state.productsInCart.map((product) => {
                    if (action.product.id === product.id) {
                        return {
                            ...product,
                            quantity: action.quantity
                        }
                    } else {
                        return product
                    }
                })
            }
            return {...state, productsInCart: newCart, restaurant: action.restaurant}

        case "RM_PRODUCT_IN_CART": 
            const newCarts = state.productsInCart.filter((product) => {
                return product.id !== action.product.id
            })
            
            if (newCarts.length === 0 ) {
                window.localStorage.removeItem(cart, restaurant)
                return {...state, restaurant: [], productsInCart: []}
            }

            return {...state, productsInCart: newCarts}

        case "CLEAR_PRODUCTS_IN_CART":
            window.localStorage.removeItem(cart, restaurant)
            return {...state, restaurant: [], productsInCart: []}
        
        default: 
            return state
    }
}