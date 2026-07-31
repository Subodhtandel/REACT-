import { useEffect, useState } from "react"

import { db } from "../firebase"

import {
collection,
getDocs
} from "firebase/firestore"

function WatchList(){

const [movies,setMovies]=useState([])

useEffect(()=>{

fetchMovies()

},[])

const fetchMovies=async()=>{

const snapshot=await getDocs(collection(db,"watchlists"))

const list=snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}))

setMovies(list)

}

return(

<div>

<h2>Movie Watchlist</h2>

{

movies.map(movie=>(

<div key={movie.id}>

<h4>{movie.name}</h4>

<p>

{movie.status?"Watched":"Not Watched"}

</p>

</div>

))

}

</div>

)

}

export default WatchList