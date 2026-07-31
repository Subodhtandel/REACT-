import { ADD_SONG, REMOVE_SONG } from "./actions"

const initialState = {
  playlist: [],
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      }

    case REMOVE_SONG:
      return {
        ...state,
        playlist: state.playlist.filter(
          (_, index) => index !== action.payload
        ),
      }

    default:
      return state
  }
}

export default playlistReducer