import { useState } from "react"

import {
doc,
updateDoc
} from "firebase/firestore"

import { db } from "../firebase"

function EditReview({review}){

const [rating,setRating]=useState(review.rating)

const [comment,setComment]=useState(review.comment)

const updateReview=async()=>{

try{

await updateDoc(

doc(db,"reviews",review.id),

{

rating,

comment

}

)

alert("Updated Successfully")

}

catch(err){

console.log(err)

}

}

return(

<div>

<input
value={rating}
onChange={(e)=>setRating(e.target.value)}
/>

<input
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<button
onClick={updateReview}
>

Update

</button>

</div>

)

}

export default EditReview