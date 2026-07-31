
import React, { memo } from "react" 
const LikeButton = memo(({ likes, onLike }) => 
    { console.log("LikeButton Rendered") 
        return ( 
    <button onClick={onLike}> ❤️ Like ({likes}) </button> ) 
}) 

export default LikeButton