import { useParams } from "react-router-dom"

const products = [
  { id: "101", name: "Laptop", price: "₹50000" },
  { id: "102", name: "Phone", price: "₹25000" },
  { id: "103", name: "Keyboard", price: "₹1500" },
  { id: "104", name: "Mouse", price: "₹800" },
  { id: "105", name: "Monitor", price: "₹12000" },
]

function Product() {
  const { id } = useParams()

  const product = products.find((item) => item.id === id)

  if (!product) return <h2>Product Not Found</h2>

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  )
}

export default Product