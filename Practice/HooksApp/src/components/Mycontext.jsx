import { createContext } from "react";


export const Mycontext = createContext()

const ContextProvider = ({ children }) => {
    var username = "abc"
    var email = "abc@gmail.com"

    return <Mycontext.Provider value={{ username, email }}>
        {children}

    </Mycontext.Provider>
}

export default ContextProvider