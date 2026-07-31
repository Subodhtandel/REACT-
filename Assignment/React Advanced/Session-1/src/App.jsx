import Playlistcard from "./componants/Playlistcard"
import LikeCounter from "./componants/Post"


const App = () => {
  return (
    <div
    style={{
    backgroundColor:"#0b0b0b"
    }}
    >
        
        <h1>Welcome to the Music App</h1>
        <Playlistcard
            songName='WO Lamhe wo baatein'
            artist='Atif Aslam'
        />
        <Playlistcard
            songName='Tum Hi Ho'
            artist='Arijit Singh'
        />
        <Playlistcard
            songName='Channa Mereya'
            artist='Arijit Singh'   
        />
        <LikeCounter />
    </div>
  )
}
export default App