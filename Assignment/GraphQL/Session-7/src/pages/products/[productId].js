import { useRouter } from "next/router"

export default function Product() {
  const router = useRouter()
  const { productId } = router.query

  return (
    <div>
      <h1>Flipkart Product Details</h1>

      <h2>Product ID: {productId}</h2>

      <p>
        Welcome! You are viewing the Flipkart product with ID: {productId}.
      </p>
    </div>
  )
}