function ProductCard({ product }) {
  return (
    <div className="card h-100 text-center p-3">

      <img
        src={product.image}
        alt={product.name}
        className="img-fluid"
      />

      <h5 className="mt-3">
        {product.name}
      </h5>

      <p>₹ {product.price}</p>

      <button className="btn btn-primary">
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard