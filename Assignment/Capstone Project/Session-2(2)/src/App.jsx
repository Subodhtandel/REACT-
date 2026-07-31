import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ProductGrid from "./components/ProductGrid"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />

      <div className="container-fluid mt-3">
        <div className="row">

          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <ProductGrid />
          </div>

        </div>
      </div>
    </>
  )
}

export default App