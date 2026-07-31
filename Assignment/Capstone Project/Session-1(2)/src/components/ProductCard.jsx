function ProductCard({ product }) {
  return (
    <div className="card p-3">

      <h5>{product.name}</h5>

      <p>₹ {product.price}</p>

      <p>Stock : {product.stock}</p>

    </div>
  )
}

export default ProductCard