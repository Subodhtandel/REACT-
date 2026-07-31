import { useState, useEffect } from "react"

function useTrendingMovies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const FetchMovies = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        const result = await response.json()
        setData(result.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    FetchMovies()
  }, [])

  return { data, loading, error }
}

export default useTrendingMovies