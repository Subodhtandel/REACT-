import React,{ useReducer,useState } from "react"

const initialState = 0

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return 0
    default:
      return state
  }
}
function PlaylistCounter() {
    const[count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h2>Playlist Song:{count}</h2>
        
            <button onClick={()=>dispatch({type:"increment"})}>
                Add Song
            </button>
            <button onClick={()=>dispatch({type:"decrement"})}
                disabled={count===0}>
                Remove Song
            </button>
            <button onClick={()=>dispatch({type:"reset"})}>
                Reset
            </button>

        </div>
    )
}

export default PlaylistCounter