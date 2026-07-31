import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log(
      "Spotify API Key:",
      import.meta.env.VITE_SPOTIFY_API_KEY
    )

    console.log(
      "Zomato API Key:",
      import.meta.env.VITE_ZOMATO_API_KEY
    )

    console.log(
      "Zomato API URL:",
      import.meta.env.VITE_ZOMATO_API_URL
    )
  }, [])

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>🎵 Spotify Playlist Viewer</h1>

      <p>Welcome to the Spotify Playlist Viewer App.</p>

      <p>
        Open the browser console (F12 → Console) to see the
        environment variables.
      </p>

      <hr />

      <h3>Environment Variables</h3>

      <p>
        <strong>Spotify API Key:</strong>{" "}
        {import.meta.env.VITE_SPOTIFY_API_KEY}
      </p>

      <p>
        <strong>Zomato API Key:</strong>{" "}
        {import.meta.env.VITE_ZOMATO_API_KEY}
      </p>

      <p>
        <strong>Zomato API URL:</strong>{" "}
        {import.meta.env.VITE_ZOMATO_API_URL}
      </p>
    </div>
  )
}

export default App