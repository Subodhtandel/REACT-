import { useQuery } from "@apollo/client/react"
import { GET_SONGS } from "../graphql/queries"

function Songs() {
  const { loading, error, data } = useQuery(GET_SONGS)

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error.message}</h2>

  return (
    <div>
      <h1>All Songs</h1>

      {data.songs.map((song) => (
        <div
          key={song.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>
          <p>Duration: {song.duration} sec</p>
        </div>
      ))}
    </div>
  )
}

export default Songs