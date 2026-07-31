import { useEffect } from "react"
import Header from "../components/Header"
import {
  printSpotifyKey,
  printZomatoConfig,
} from "../utils/api"

export default function Home() {
  useEffect(() => {
    printSpotifyKey()
    printZomatoConfig()
  }, [])

  return (
    <>
      <Header />

      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        <h2>Welcome to Spotify Playlist Viewer</h2>

        <p>
          Environment variables are loaded successfully.
        </p>

        <p>
          Open the browser console (F12 → Console) to
          view the API keys.
        </p>
      </div>
    </>
  )
}