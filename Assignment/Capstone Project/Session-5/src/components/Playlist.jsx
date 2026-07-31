import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

function Playlist() {

  const addPlaylist = async () => {

    try {

      await addDoc(collection(db, "playlists"), {

        name: "Top Hits 2026",

        songs: [
          "Shape of You",
          "Believer",
          "Perfect",
          "Levitating"
        ]

      })

      alert("Playlist Added")

    } catch (err) {

      console.log(err)

    }

  }

  return (

    <div>

      <h2>Spotify Playlist</h2>

      <button onClick={addPlaylist}>
        Add Sample Playlist
      </button>

    </div>

  )

}

export default Playlist