import useTrendingMovies from "../hooks/useTrendingMovies"

function MoviesList() {
  const { data, loading, error } = useTrendingMovies()

  // if (loading) return <h2></h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      <h2>Products</h2>

      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.images[0]} alt={item.title} width="300" height="200" />
          <p>${item.price}</p>
          <p>Stock: {item.stock}</p>
          <p>Reviews: {item.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default MoviesList