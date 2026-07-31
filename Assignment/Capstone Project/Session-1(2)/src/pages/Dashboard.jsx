import DashboardCard from "../components/DashboardCard"
import ProductCard from "../components/ProductCard"
import products from "../data/products"

function Dashboard() {
  return (
    <div className="container mt-4">

      <div className="row">

        <div className="col-md-4">
          <DashboardCard
            title="Total Products"
            value={products.length}
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Orders"
            value="150"
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Revenue"
            value="₹ 1,50,000"
          />
        </div>

      </div>

      <h3 className="mt-5">Products</h3>

      <div className="row">

        {products.map((item) => (
          <div className="col-md-4 mt-3" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}

      </div>

    </div>
  )
}

export default Dashboard