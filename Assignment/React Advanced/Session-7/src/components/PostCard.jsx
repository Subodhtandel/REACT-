import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function PostCard() {
  const { theme } = useContext(ThemeContext)

  const style = {
    background: theme === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "white" : "black",
    padding: "20px",
    margin: "30px auto",
    width: "350px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 0px 8px gray",
  }

  return (
    <div style={style}>
      <h2>Post Card</h2>
      <p>Username:Name</p>
      <p>This component is 3 levels deep.</p>
    </div>
  )
}

export default PostCard