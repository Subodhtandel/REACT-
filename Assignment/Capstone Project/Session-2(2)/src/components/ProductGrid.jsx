import products from "../data/products"
import ProductCard from "./ProductCard"

function ProductGrid() {
  return (
    <div className="row">

      {products.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}

    </div>
  )
}

export default ProductGrid