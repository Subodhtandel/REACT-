import React, { useState, useCallback } from "react"
import SongItem from "./SongItem"

function PlaylistManager() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Believer", favorite: false },
    { id: 2, title: "Shape of You", favorite: false },
    { id: 3, title: "Perfect", favorite: false },
    { id: 4, title: "Thunder", favorite: false },
  ])

  const toggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    )
  }, [])

  return (
    <div>
      <h2>Playlist Manager</h2>

      <ul>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  )
}

export default PlaylistManager