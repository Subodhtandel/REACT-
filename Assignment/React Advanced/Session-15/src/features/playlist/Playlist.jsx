import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addSong,
  removeSong,
} from "./playlistSlice"

function Playlist() {
  const songs = useSelector(
    (state) => state.playlist.songs
  )

  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")

  const handleAdd = () => {
    if (!title || !artist) return

    dispatch(
      addSong({
        id: Date.now(),
        title,
        artist,
      })
    )

    setTitle("")
    setArtist("")
  }

  return (
    <div>
      <h2>Spotify Playlist</h2>

      <input
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAdd}>
        Add Song
      </button>

      <hr />

      {songs.map((song) => (
        <div key={song.id}>
          <strong>{song.title}</strong>

          <br />

          {song.artist}

          <br />

          <button
            onClick={() =>
              dispatch(removeSong(song.id))
            }
          >
            Remove
          </button>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Playlist