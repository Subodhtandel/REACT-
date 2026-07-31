import PlaylistEditor from "./components/PlaylistEditor"
import LiveCommentsFeed from "./components/LiveCommentsFeed"

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Firestore CRUD + Real-Time Updates</h1>

      <PlaylistEditor />

      <hr />

      <LiveCommentsFeed />
    </div>
  )
}

export default App