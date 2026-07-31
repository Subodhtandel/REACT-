import { useState } from "react"
import { UPDATE_SONG } from "../graphql/mutations"
import { useMutation  } from "@apollo/client/react"

const EditSong = ({ song, onClose }) => {
  const [title, setTitle] = useState(song.title)
  const [artist, setArtist] = useState(song.artist)
  const [updateSong] = useMutation(UPDATE_SONG)

  const update=() => {
    updateSong({
        variables: { id: song.id, title, artist },
    })}
  

  return (
    <div>
      <h2>Edit Song</h2>
        <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
        />
        <button onClick={update}>Update Song</button>
        <button onClick={onClose}>Cancel</button>
    </div>
  )
}
export default EditSong