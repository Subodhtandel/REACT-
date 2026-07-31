import { createContext, useReducer } from "react"

export const FavoritesContext = createContext()

const initialState = {
  favorites: [],
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        favorites: [...state.favorites, action.payload],
      }

    case "REMOVE":
      return {
        favorites: state.favorites.filter(
          (id) => id !== action.payload
        ),
      }

    default:
      return state
  }
}

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}