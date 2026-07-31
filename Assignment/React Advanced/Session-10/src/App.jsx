import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return unsubscribe
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
      alert("Logged Out Successfully")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Firebase Authentication</h1>

      {user ? (
        <>
          <h3>Logged in as: {user.email}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <h3>No User Logged In</h3>
      )}

      <hr />

      <SignUp />

      <hr />

      <Login />
    </div>
  )
}

export default App