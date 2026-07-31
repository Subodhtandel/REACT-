function MovieList({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.imdbID}>
                {movie.Title} ({movie.Year})
                </li>
            ))}
        </ul>
    )
}
export default MovieList