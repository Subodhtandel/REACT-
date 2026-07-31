import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const Store = createContext()

export const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])

    const list = async () => {

            const resp = await axios.get("http://localhost:5000/users")

            setUsers(resp.data)
        
           
    }
    

    useEffect(() => {
        list()
    }, [])


    return <Store.Provider value={{users}}>
        {children}
    </Store.Provider>

}