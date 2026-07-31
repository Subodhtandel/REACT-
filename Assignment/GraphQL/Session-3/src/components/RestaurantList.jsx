import { useQuery } from "@apollo/client/react"
import { GET_RESTAURANTS } from "../graphql/queries"
import RestaurantCard from "./RestaurantCard"

const RestaurantList = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="restaurant-list">
      {data.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default RestaurantList