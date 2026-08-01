import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  FETCH_OFFERS_SUCCESS,
} from "./actions"

import { combineReducers } from "redux"

// Cart Reducer
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload)

    default:
      return state
  }
}

// Wishlist Reducer
const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload]

    case REMOVE_FROM_WISHLIST:
      return state.filter((item) => item.id !== action.payload)

    default:
      return state
  }
}

// Offers Reducer
const offersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      return action.payload

    default:
      return state
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  offers: offersReducer,
})

export default rootReducer