import { useState } from "react"
import { db } from "../firebase"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"

function PlaylistEditor() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")

  const updatePlaylist = async () => {
    try {
      const playlistRef = doc(db, "playlists", id)

      await updateDoc(playlistRef, {
        name: name,
      })

      alert("Playlist Updated Successfully")
    } catch (error) {
      alert(error.message)
    }
  }

  const deletePlaylist = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this playlist?"
    )

    if (!confirmDelete) return

    try {
      await deleteDoc(doc(db, "playlists", id))

      alert("Playlist Deleted Successfully")

      setId("")
      setName("")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h2>Playlist Editor</h2>

      <input
        type="text"
        placeholder="Playlist Document ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="New Playlist Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={updatePlaylist}>
        Update Playlist
      </button>

      <button
        onClick={deletePlaylist}
        style={{ marginLeft: "10px" }}
      >
        Delete Playlist
      </button>
    </div>
  )
}

export default PlaylistEditor