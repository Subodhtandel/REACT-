import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log(
      "Google Maps API Key:",
      import.meta.env.VITE_MAPS_API_KEY
    )
  }, [])

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1>📸 Insta Feed Clone</h1>

      <h2>React + Vite Environment Variables Demo</h2>

      <p>
        <strong>Google Maps API Key:</strong>
      </p>

      <p>{import.meta.env.VITE_MAPS_API_KEY}</p>

      <hr />

      <p>
        Open the browser console (F12 → Console) to see the API key.
      </p>
    </div>
  )
}

export default App