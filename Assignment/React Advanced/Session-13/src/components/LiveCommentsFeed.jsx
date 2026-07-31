import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore"

function LiveCommentsFeed() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "comments"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setComments(data)
      }
    )

    // Cleanup Function
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <h2>Live Comments Feed</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default LiveCommentsFeed