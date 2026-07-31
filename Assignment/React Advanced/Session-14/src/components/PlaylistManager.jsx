import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSong, removeSong } from "../redux/actions"

function PlaylistManager() {
  const [song, setSong] = useState("")

  const dispatch = useDispatch()

  const playlist = useSelector(
    (state) => state.playlist
  )

  const handleAdd = () => {
    if (song.trim() === "") return

    dispatch(addSong(song))

    setSong("")
  }

  return (
    <div>
      <h2>Playlist Manager</h2>

      <input
        type="text"
        placeholder="Enter Song Name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Song
      </button>

      <hr />

      {playlist.map((item, index) => (
        <div key={index}>
          {item}

          <button
            onClick={() => dispatch(removeSong(index))}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default PlaylistManager