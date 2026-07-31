import { useEffect, useState } from "react"

function TrendingMovies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
   const data = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 3,
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 5,
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
];
  setMovies(data)
}, [])

  return (
    <div>
      <h1>Trending Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster} alt={movie.title} width="150" />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default TrendingMovies