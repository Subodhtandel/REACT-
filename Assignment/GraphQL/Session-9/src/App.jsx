import { useState } from "react"

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    // Demo only (not real Google authentication)
    setUser({
      name: "John Doe",
      email: "john@example.com",
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Google Login Demo</h1>

      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <>
          <h2>Welcome</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  )
}

export default App