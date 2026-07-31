export const initialState = {
  user: {
    name: "Guest",
  },
  loggedIn: false,
}

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
      }

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      }

    case "UPDATE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      }

    default:
      return state
  }
}