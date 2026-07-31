import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

function AddReview() {

  const [restaurant,setRestaurant]=useState("")

  const [rating,setRating]=useState("")

  const [comment,setComment]=useState("")

  const submit=async(e)=>{

    e.preventDefault()

    try{

      await addDoc(collection(db,"reviews"),{

        restaurant,

        rating,

        comment

      })

      alert("Review Added")

      setRestaurant("")

      setRating("")

      setComment("")

    }

    catch(err){

      console.log(err)

    }

  }

  return(

<form onSubmit={submit}>

<input
placeholder="Restaurant"
value={restaurant}
onChange={(e)=>setRestaurant(e.target.value)}
/>

<input
placeholder="Rating"
value={rating}
onChange={(e)=>setRating(e.target.value)}
/>

<textarea
placeholder="Comment"
value={comment}
onChange={(e)=>setComment(e.target.value)}
></textarea>

<button>Add Review</button>

</form>

  )

}

export default AddReview