import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRestaurants } from "./restaurantSlice"

function RestaurantList() {
  const dispatch = useDispatch()

  const { list, loading, error } = useSelector(
    (state) => state.restaurants
  )

  const [city, setCity] = useState("")

  const handleFetch = () => {
    dispatch(fetchRestaurants(city))

    console.log("Fetching restaurants...")
  }

  return (
    <div>
      <h2>Restaurant List</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleFetch}>
        Search
      </button>

      <hr />

      {loading && <h3>Loading...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {!loading &&
        !error &&
        list.map((restaurant, index) => (
          <div key={restaurant.id || index}>
            <strong>
              {restaurant.name ||
                restaurant.restaurantName ||
                "Unnamed Restaurant"}
            </strong>

            <hr />
          </div>
        ))}
    </div>
  )
}

export default RestaurantList