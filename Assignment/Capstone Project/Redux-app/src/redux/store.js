import { createStore } from "redux"
import playlistReducer from "./reducer"
import { addSong } from "./actions"

const store = createStore(playlistReducer)

// Task 3
store.dispatch(addSong("Kesariya"))
store.dispatch(addSong("Shape of You"))

console.log(store.getState())

export default store