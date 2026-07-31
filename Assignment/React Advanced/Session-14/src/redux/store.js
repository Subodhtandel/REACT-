import { createStore } from "redux"
import playlistReducer from "./reducer"

const store = createStore(playlistReducer)

export default store