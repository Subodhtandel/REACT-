function RestaurantCard({ restaurant }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
    </div>
  );
}

export default RestaurantCard