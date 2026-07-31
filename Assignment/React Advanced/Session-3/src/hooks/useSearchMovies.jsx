import {useState, useEffect} from 'react'

function useSearchMovies(query) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

useEffect(() => {
    if(!query.trim()){
        setMovies([])
        return
    }
    const controller = new AbortController()
    const fetchMovies = async () => {
        try {
            setLoading(true)
            setError("")

            const res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${query}`, 
                {signal: controller.signal})

            const data = await res.json()

            if(data.Response === "False"){
            throw new Error("Movie not found")
            }
            setMovies(data.Search||[])}
            catch (err) {
                if(err.name !== "AbortError"){
                    setError(err.message)
                    setMovies([])
                }
            }
            finally{
                setLoading(false)
            }
        }
        fetchMovies()
        return () => {
            controller.abort()
        }
        }, [query])

        useEffect(() => {
            console.log("Movies updated:", movies)
        }, [movies])

        return {movies, loading, error}
}
export default useSearchMovies