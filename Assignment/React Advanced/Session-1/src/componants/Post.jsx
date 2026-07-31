import { useState } from 'react'

function LikeCounter(){
    const [like, setLike] = useState(0)
    const handleLike = () => {
        setLike(like + 1)
    }
    return (
        <div>
            <h2>❤️ Likes: {like}</h2>
            <button onClick={handleLike}>Like</button>
        </div>
    )        
}

export default LikeCounter