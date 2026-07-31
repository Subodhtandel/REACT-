import { useEffect, useState } from "react"

function MyOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>{order.title}</h3>
          <p>{order.body}</p>
        </div>
      ))}
    </div>
  )
}

export default MyOrders