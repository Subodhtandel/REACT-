import AddRestaurant from "./components/AddRestaurant"
import RestaurantList from "./components/RestaurantList"

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurant Manager</h1>

      <AddRestaurant />

      <hr />

      <RestaurantList />
    </div>
  )
}

export default App