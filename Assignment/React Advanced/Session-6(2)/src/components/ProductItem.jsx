import React, { useState, useCallback } from "react" 
import LikeButton from "./LikeButton" 

function ProductItem({ product }) { const [likes, setLikes] = useState(0) 
    
    const handleLike = useCallback(() => { setLikes((prev) => prev + 1) }, []) 
    
    return ( <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "8px", }} >
         <h4>{product.name}</h4> 
         <p>Price: ₹{product.price}</p> 
         <LikeButton likes={likes} onLike={handleLike} /> 
         </div> )
        } 
 export default ProductItem