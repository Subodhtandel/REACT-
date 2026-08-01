// Cart Actions
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

// Wishlist Actions
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST"
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"

// Offers
export const FETCH_OFFERS_SUCCESS = "FETCH_OFFERS_SUCCESS"

// Cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
})

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})

// Wishlist
export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
})

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
})

// Async Action using Thunk
export const fetchOffers = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: FETCH_OFFERS_SUCCESS,
        payload: [
          "10% OFF",
          "20% OFF",
          "Buy 1 Get 1 Free"
        ]
      })
    }, 2000)
  }
}