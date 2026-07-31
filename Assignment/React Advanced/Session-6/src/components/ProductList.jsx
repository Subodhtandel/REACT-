import React, { useMemo, useEffect } from "react"

function ProductList() {
  const startTime = performance.now()

  const products = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: Math.floor(Math.random() * 1000) + 100,
    }))
  }, [])

  useEffect(() => {
    const endTime = performance.now()
    console.log(
      `Rendered in ${(endTime - startTime).toFixed(2)} ms`
    )
  })

  return (
    <div>
      <h2>1000 Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList