import { useDispatch, useSelector } from "react-redux"
import { deleteSong } from "./playlistSlice"

function PlaylistList() {
  const songs = useSelector(
    (state) => state.playlist.songs
  )

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Playlist</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <strong>{song.title}</strong>

          <br />

          {song.artist}

          <br />

          <button
            onClick={() =>
              dispatch(deleteSong(song.id))
            }
          >
            Remov
          </button>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default PlaylistList