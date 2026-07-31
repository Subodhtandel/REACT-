import { useEffect, useState } from "react"
import Login from "../components/Login"
import PostCard from "../components/PostCard"

export default function Feed() {

  const [posts,setPosts]=useState([])
  const [user,setUser]=useState(null)

  useEffect(()=>{

    fetch("/api/graphql",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query:`
        {
          posts{
            id
            title
            content
            author
            createdAt
          }
        }
        `
      })
    })
    .then(res=>res.json())
    .then(data=>{
      setPosts(data.data.posts)
    })

  },[])

  return(
    <div>

      <h1>News Feed</h1>

      <Login setUser={setUser}/>

      {
        user && (
          <div>

            <img src={user.photoURL} width="80"/>

            <h3>{user.displayName}</h3>

          </div>
        )
      }

      {
        posts.map(post=>(
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      }

    </div>
  )

}