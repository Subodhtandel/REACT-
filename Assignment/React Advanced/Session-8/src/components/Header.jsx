import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Header() {
  const { state, dispatch } = useContext(ThemeContext)

  return (
    <div
      style={{
        background: state.theme === "dark" ? "#222" : "#ddd",
        color: state.theme === "dark" ? "white" : "black",
        padding: 20,
      }}
    >
      <h2>Current Theme : {state.theme}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_THEME",
          })
        }
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Header