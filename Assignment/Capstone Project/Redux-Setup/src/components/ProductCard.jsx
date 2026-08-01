import { useDispatch } from "react-redux"
import {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} from "../redux/actions"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h2>{product.name}</h2>

      <button onClick={() => dispatch(addToCart(product))}>
        Add Cart
      </button>

      <button onClick={() => dispatch(removeFromCart(product.id))}>
        Remove Cart
      </button>

      <br /><br />

      <button onClick={() => dispatch(addToWishlist(product))}>
        Add Wishlist
      </button>

      <button onClick={() => dispatch(removeFromWishlist(product.id))}>
        Remove Wishlist
      </button>
    </div>
  )
}

export default ProductCard