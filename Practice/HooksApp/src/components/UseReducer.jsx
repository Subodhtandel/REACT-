import { useContext, useReducer, useState } from "react"
import { Mycontext } from "./Mycontext"


const reducer = (state, action) => {

    if (action.type == 'incr') {

        state = state + 1
        return state
    }
    else if (action.type == 'decr') {
        state = state - 1
        return state
    }
    else if (action.type == 'custome') {
        state = state + Number(action.data)
        return state
    }
    else {
        return state
    }

}

export const UseReducer = () => {


    const { username, email } = useContext(Mycontext)



    const [state, dispatch] = useReducer(reducer, 0)

    const [c, setc] = useState()

    const incr = () => {
        dispatch({ "type": "incr" })
    }

    const decr = () => {
        dispatch({ "type": "decr" })
    }

    const custome = () => {

        dispatch({ "type": "custome", "data": c })
    }


    return <><h1>UseRreducer Demo,{username}</h1>
        <button onClick={incr}>+</button>
        <span>{state}</span>

        <button onClick={decr}>-</button>
        <input type="text" onChange={(e) => setc(e.target.value)} />
        <button onClick={custome}>ADD</button>
    </>
}