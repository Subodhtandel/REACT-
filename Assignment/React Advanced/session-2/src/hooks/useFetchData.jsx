import { useState, useEffect } from "react"

function useFetchData(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Error fetching data")
        }

        const result = await response.json()

        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      FetchData()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetchData