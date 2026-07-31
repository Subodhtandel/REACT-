// Action Types
export const ADD_SONG = "ADD_SONG"
export const REMOVE_SONG = "REMOVE_SONG"

// Action Creator
export const addSong = (songName) => {
  return {
    type: ADD_SONG,
    payload: songName,
  }
}

// Remove Song
export const removeSong = (songName) => {
  return {
    type: REMOVE_SONG,
    payload: songName,
  }
}