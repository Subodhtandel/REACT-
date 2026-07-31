import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

function AddRestaurant() {
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "restaurants"), {
        name,
        cuisine,
      })

      alert("Restaurant Added!")

      setName("")
      setCuisine("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>

      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />

      <br /><br />

      <button>Add Restaurant</button>
    </form>
  )
}

export default AddRestaurant