import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Profile() {
  const { state, dispatch } = useContext(AuthContext)

  return (
    <>
      <h2>{state.user.name}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_NAME",
            payload: "Subodh",
          })
        }
      >
        Change Name
      </button>
    </>
  )
}

export default Profile