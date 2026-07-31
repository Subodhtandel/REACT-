import React from "react"

const SongItem = React.memo(({ song, toggleFavorite }) => {
  console.log("Rendering:", song.title)

  return (
    <li>
      {song.title}

      <button
        onClick={() => toggleFavorite(song.id)}
        style={{ marginLeft: "10px" }}
      >
        {song.favorite ? "❤️" : "🤍"}
      </button>
    </li>
  )
})

export default SongItem