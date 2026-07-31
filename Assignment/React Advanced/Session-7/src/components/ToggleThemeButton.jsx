import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function ToggleThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  )
}

export default ToggleThemeButton