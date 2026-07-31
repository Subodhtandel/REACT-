function DashboardCard({ title, value }) {
  return (
    <div className="card p-3 shadow">

      <h5>{title}</h5>

      <h2>{value}</h2>

    </div>
  )
}

export default DashboardCard