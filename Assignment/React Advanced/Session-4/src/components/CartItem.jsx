import React, {useReducer} from "react"

const initialState = 1

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}
function CartItem() {
    const[quantity, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h3>Cart Item Quantity</h3>
            <h2>{quantity}</h2>

            <button onClick={()=>dispatch({type:"decrement"})} disabled={quantity===1}>
                Decrease Quantity -
            </button>
            <button onClick={()=>dispatch({type:"increment"})}>
                Increase Quantity +
            </button>
            <button onClick={()=>dispatch({type:"reset"})}>
                Reset
            </button>
        </div>
    )
}
export default CartItem