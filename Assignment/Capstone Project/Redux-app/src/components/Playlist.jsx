import { useSelector, useDispatch } from "react-redux"
import { addSong, removeSong } from "../redux/actions"
import { useState } from "react"

function Playlist() {

  const songs = useSelector(state => state)

  const dispatch = useDispatch()

  const [song, setSong] = useState("")

  const addNewSong = () => {

    if(song.trim() !== ""){

      dispatch(addSong(song))

      setSong("")

    }

  }

  return (

    <div className="container">

      <h1>Spotify Playlist</h1>

      <input
        type="text"
        placeholder="Enter Song Name"
        value={song}
        onChange={(e)=>setSong(e.target.value)}
      />

      <button onClick={addNewSong}>
        Add Song
      </button>

      <ul>

        {

          songs.map((item,index)=>(

            <li key={index}>

              {item}

              <button
                className="remove"
                onClick={()=>dispatch(removeSong(item))}
              >
                Remove
              </button>

            </li>

          ))

        }

      </ul>

    </div>

  )

}

export default Playlist