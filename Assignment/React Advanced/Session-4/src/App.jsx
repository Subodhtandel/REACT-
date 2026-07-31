import CartItem from "./components/CartItem"
import PlaylistCounter from "./components/PlaylistCounter"
import Counter from "./components/Counter"
import PlaylistManager from "./components/PlaylistManager"



function App() {
  return (
    <div>
      <PlaylistCounter/>
      <PlaylistManager/>
      <CartItem/>
      <Counter/>
    </div>
  )
}
export default App