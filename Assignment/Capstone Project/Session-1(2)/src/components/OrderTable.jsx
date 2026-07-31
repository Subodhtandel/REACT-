function OrderTable({ orders }) {
  return (
    <table className="table table-bordered">

      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.customer}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>

    </table>
  )
}

export default OrderTable