import { BrowserRouter, Routes, Route } from "react-router-dom"

import TrendingMovies from "./pages/TrendingMovies"
import MyOrders from "./pages/MyOrders"
import LatestAlbums from "./pages/LatestAlbums"
import Product from "./pages/Product"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrendingMovies />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/albums" element={<LatestAlbums />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App