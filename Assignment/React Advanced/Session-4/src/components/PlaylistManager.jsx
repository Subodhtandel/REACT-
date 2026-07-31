import React, { useReducer, useState } from "react";
import { playlistReducer, initialState } from "../reducers/playlistReducer";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, dispatch] = useReducer(
    playlistReducer,
    initialState
  );

  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: songName,
    });

    setSongName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spotify Playlist</h1>

      <input
        type="text"
        placeholder="Enter song"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <button onClick={addSong}>Add</button>

      <hr />

      {songs.length === 0 ? (
        <p>No songs added.</p>
      ) : (
        songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default PlaylistManager