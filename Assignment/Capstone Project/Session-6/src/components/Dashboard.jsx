import Navbar from "./Navbar"

import LogoutButton from "./LogoutButton"

export default function Dashboard(){

return(

<div>

<Navbar/>

<h1>

Spotify Dashboard

</h1>

<img

src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"

width="220"

/>

<h3>

Welcome Back!

</h3>

<LogoutButton/>

</div>

)

}