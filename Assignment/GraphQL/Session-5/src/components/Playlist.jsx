import { useQuery } from "@apollo/client/react"
import { GET_PLAYLIST } from "../graphql/queries"

function Playlist() {
  const { loading, error, data } = useQuery(GET_PLAYLIST)

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error.message}</h2>

  return (
    <div>
      <h1>{data.playlist.name}</h1>

      {data.playlist.songs.map((song) => (
        <div key={song.title}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
      ))}
    </div>
  )
}

export default Playlist