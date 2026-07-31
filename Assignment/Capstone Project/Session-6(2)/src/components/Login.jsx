import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useAuth } from "../context/AuthContext"

export default function Login(){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const{setUser}=useAuth()

const login=async(e)=>{

e.preventDefault()

try{

const result=await signInWithEmailAndPassword(
auth,
email,
password
)

setUser(result.user)

}
catch(err){

alert(err.message)

}

}

return(

<form onSubmit={login}>

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

)

}