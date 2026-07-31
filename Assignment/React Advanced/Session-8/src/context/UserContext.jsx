import { createContext } from "react"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const user = {
    id: 1,
    name: "Subodh",
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}