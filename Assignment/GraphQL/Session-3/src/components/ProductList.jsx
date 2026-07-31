import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "../graphql/queries"

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  if (loading) return <h2>Loading...</h2>

  if (error) return <h2>Error: {error.message}</h2>

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      {data.products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            width="150"
            height="150"
          />

          <h3>{product.name}</h3>

          <h2>₹{product.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default ProductList