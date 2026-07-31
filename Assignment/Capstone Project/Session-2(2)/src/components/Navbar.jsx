function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <div className="container">

        <a className="navbar-brand text-white" href="#">
          Flipkart Clone
        </a>

        <input
          className="form-control w-50"
          type="search"
          placeholder="Search products"
        />

        <button className="btn btn-light">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar