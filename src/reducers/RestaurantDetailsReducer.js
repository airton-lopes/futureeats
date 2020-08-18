export const initialState = {
    restaurantDetails: [],
    restaurantProducts: []
}

export const RestaurantDetailsReducer = (state, action) => {
    switch(action.type) {
        case "Renderizar":
            return {restaurantDetails: action.restaurant, restaurantProducts: action.restaurant.products}
        default:
            return state
    }
}