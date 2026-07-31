import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {
  const { theme } = useContext(ThemeContext)

  const style = {
    background: theme === "dark" ? "#222" : "#4CAF50",
    color: "white",
    padding: "20px",
    textAlign: "center",
    fontSize: "22px",
  }

  return <div style={style}>Instagram Theme Demo</div>
}

export default Navbar