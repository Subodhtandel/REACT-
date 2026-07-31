import AddSong from "./components/AddSong"
import SongList from "./components/SongList"

function App() {
  return (
    <div className="App">
      <h1>PlayList App</h1>
      <AddSong/>
      <SongList/>
    </div>
  )
}

export default App