import { useDispatch, useSelector } from "react-redux"
import ProductCard from "./components/ProductCard"
import { fetchOffers } from "./redux/actions"

function App() {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)
  const offers = useSelector((state) => state.offers)

  const product = {
    id: 1,
    name: "Wireless Mouse",
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Shopping Cart</h1>

      <ProductCard product={product} />

      <button onClick={() => dispatch(fetchOffers())}>
        Fetch Offers
      </button>

      <h2>Cart</h2>
      <pre>{JSON.stringify(cart, null, 2)}</pre>

      <h2>Wishlist</h2>
      <pre>{JSON.stringify(wishlist, null, 2)}</pre>

      <h2>Offers</h2>
      <pre>{JSON.stringify(offers, null, 2)}</pre>
    </div>
  )
}

export default App