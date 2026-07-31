import { useState } from "react"

export default function PostCard({post}){

const [summary,setSummary]=useState("")

const [loading,setLoading]=useState(false)

const summarize=async()=>{

setLoading(true)

const res=await fetch("/api/summarize",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

content:post.content

})

})

const data=await res.json()

setSummary(data.summary)

setLoading(false)

}

return(

<div>

<h2>{post.title}</h2>

<p>{post.author}</p>

<p>{post.content}</p>

<button onClick={summarize}>

Summarize with AI

</button>

{

loading && <p>Loading...</p>

}

{

summary &&

<p>{summary}</p>

}

<hr/>

</div>

)

}