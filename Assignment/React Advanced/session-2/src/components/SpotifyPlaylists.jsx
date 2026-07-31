import usefetchdata from "../hooks/usefetchdata"

function spotifyplaylists() {
  const { data, loading, error } =
    usefetchdata(
      "https://jsonplaceholder.typicode.com/users"
    )

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      <h2>Items</h2>

      {data?.map((item) => (
        <div key={item.id}>
          <img
            src={`https://i.pravatar.cc/150?img=${item.id}`}
            alt={item.name}
            width="300"
            height="200"
          />
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <p><a href={item.website} target="_blank" rel="noopener noreferrer">
            {item.website}
          </a></p>
        </div>
      ))}
    </div>
  )
}

export default spotifyplaylists