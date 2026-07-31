function Sidebar() {
  return (
    <div className="card p-3">

      <h5>Filters</h5>

      <hr />

      <h6>Category</h6>

      <div>
        <input type="checkbox" /> Electronics
      </div>

      <div>
        <input type="checkbox" /> Fashion
      </div>

      <div>
        <input type="checkbox" /> Grocery
      </div>

      <hr />

      <h6>Price</h6>

      <input
        type="range"
        className="form-range"
      />

    </div>
  )
}

export default Sidebar