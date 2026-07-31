import LoginForm from "./features/playlist/LoginForm"
import PlaylistList from "./features/playlist/PlaylistList"

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <LoginForm />

      <hr />

      <PlaylistList />
    </div>
  )
}

export default App