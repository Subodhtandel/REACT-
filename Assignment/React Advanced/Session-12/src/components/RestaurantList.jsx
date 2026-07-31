import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const fetchRestaurants = async () => {
    const snapshot = await getDocs(collection(db, "restaurants"))

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    setRestaurants(data)
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.cuisine.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Restaurant List</h2>

      <input
        type="text"
        placeholder="Filter by Cuisine"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <br /><br />

      {filteredRestaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.cuisine}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default RestaurantList