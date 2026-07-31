import { useEffect } from "react"
import { printMapsKey } from "../utils/api"

export default function Home() {
  useEffect(() => {
    console.log(
      "Google Maps API Key:",
      process.env.NEXT_PUBLIC_MAPS_API_KEY
    )

    printMapsKey()
  }, [])

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>📸 Insta Feed Clone</h1>

      <h3>Next.js Environment Variables Demo</h3>

      <p>
        Open the browser console (F12 → Console) to see the API key.
      </p>

      <p>
        Current Key:{" "}
        <strong>
          {process.env.NEXT_PUBLIC_MAPS_API_KEY}
        </strong>
      </p>
    </div>
  )
}