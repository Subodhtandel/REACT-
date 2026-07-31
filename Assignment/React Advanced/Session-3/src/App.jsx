import { useState } from "react"
import useSearchMovies from "./hooks/useSearchMovies"
import MovieList from "./components/MovieList"

function App() {
  const [query, setQuery] = useState("")

  const { movies, loading, error } = useSearchMovies(query)

  return (
    <div>
      <h1>Movie Search App</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
}

export default App