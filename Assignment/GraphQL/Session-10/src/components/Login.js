import { auth } from "../firebase/firebase"

import {

GoogleAuthProvider,

signInWithPopup

} from "firebase/auth"

export default function Login({setUser}){

const login=async()=>{

const provider=new GoogleAuthProvider()

const result=await signInWithPopup(auth,provider)

setUser(result.user)

}

return(

<button onClick={login}>

Login with Google

</button>

)

}