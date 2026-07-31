import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    useEffect(() => {

        if(user){
            localStorage.setItem("user",JSON.stringify(user))
        }
        else{
            localStorage.removeItem("user")
        }

    },[user])

    return(

        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth=()=>useContext(AuthContext)