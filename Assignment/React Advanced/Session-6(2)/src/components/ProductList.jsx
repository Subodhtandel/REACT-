import React, { useState, useMemo } from "react" 
import ProductItem from "./ProductItem" 


function ProductList() { const [searchTerm, setSearchTerm] = useState("")
    
    const products = useMemo(() => { return Array.from({ length: 1000 }, 
        (_, index) => ({ id: index + 1, name: `Product ${index + 1}`,
             price: Math.floor(Math.random() * 1000) + 100, })) }, []) 
             const filteredProducts = useMemo(() => { console.log("Filtering Products")
                 return products.filter((product) => product.name .toLowerCase() .includes(searchTerm.toLowerCase()) ) 
                }, [products, searchTerm])
                const productElements = useMemo(() => { console.log("Rendering Product List")
                     return filteredProducts.map((product) => ( <ProductItem key={product.id} product={product} /> ))
                     }, [filteredProducts])
                      return ( <div style={{ padding: "20px" }}>
                         <h2>Product List</h2> 
                         <input type="text" placeholder="Search Product..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } 
                         style={{ padding: "8px", width: "250px", marginBottom: "15px", }} /> 
                         <div style={{ height: "500px", overflowY: "scroll", border: "1px solid gray", padding: "10px", }} > {productElements} 
                            
                            </div> </div> ) } 
                         
                         export default ProductList