import { useAuth } from "../context/AuthContext"

export default function Dashboard(){

const{user,setUser}=useAuth()

const logout=()=>{

setUser(null)

}

return(

<div>

<h1>Spotify Dashboard</h1>

<h2>Welcome {user.email}</h2>

<button onClick={logout}>
Logout
</button>

</div>

)

}