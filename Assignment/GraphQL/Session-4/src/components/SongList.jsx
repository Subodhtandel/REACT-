import { useQuery, useMutation } from "@apollo/client/react"
import { GET_SONGS } from "../graphql/queries"
import { DELETE_SONG } from "../graphql/mutations"
import EditSong from "./EditSong"

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS)

  const [deleteSong] = useMutation(DELETE_SONG)

  if (loading) return <h2>Loading...</h2>

  if (error) return <h2>Error...</h2>

  return (
    <>
      <h2>Total Songs: {data.songs.length}</h2>

      {data.songs.map((song) => (
        <div
          key={song.id}
          style={{
            border: "1px solid gray",
            margin: 10,
            padding: 10,
          }}
        >
          <h3>{song.title}</h3>

          <p>{song.artist}</p>

          <EditSong song={song} />

          <button
            onClick={() =>
              deleteSong({
                variables: {
                  id: song.id,
                },

                update(cache) {
                  const existing = cache.readQuery({
                    query: GET_SONGS,
                  })

                  cache.writeQuery({
                    query: GET_SONGS,
                    data: {
                      songs: existing.songs.filter(
                        (s) => s.id !== song.id
                      ),
                    },
                  })
                },
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default SongList