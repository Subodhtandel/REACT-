import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function Navbar({ user }) {
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#222",
        color: "white",
      }}
    >
      <h2>Spotify Clone</h2>

      {user ? (
        <div>
          <span>
            Welcome, {user.displayName || user.email}
          </span>

          <button
            onClick={logout}
            style={{ marginLeft: "15px" }}
          >
            Logout
          </button>
        </div>
      ) : (
        <h3>Welcome, Guest</h3>
      )}
    </nav>
  )
}

export default Navbar