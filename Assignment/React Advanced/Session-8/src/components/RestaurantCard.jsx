import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

function RestaurantCard() {
  const { state, dispatch } = useContext(FavoritesContext)

  return (
    <div>
      <h2>Restaurant #101</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: 101,
          })
        }
      >
        Add Favorite
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE",
            payload: 101,
          })
        }
      >
        Remove Favorite
      </button>

      <h3>Favorites</h3>

      {state.favorites.join(", ")}
    </div>
  )
}