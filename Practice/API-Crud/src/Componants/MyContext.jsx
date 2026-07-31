import {createContext,useEffect,useState} from "react"
import { useNavigate } from "react-router-dom"

export const MyContext=createContext()

export const ContextProvider=({children})=>{

    const navigate=useNavigate()
    const [products,setProducts]=useState([])
    const [product,setProduct]=useState()

    const getProducts = async () => {
        const API_URL = "https://6a1d0250bcc4f20d5ca3cb18.mockapi.io/Product"
        const res = await fetch(API_URL)
        const result = await res.json()
        setProducts(result)
    }

    const CreateProduct = async (data) => {
        const resp = await fetch("https://6a1d0250bcc4f20d5ca3cb18.mockapi.io/Product", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        getProducts()
    }

    const deleteProduct = async (id) => {
        const resp = await fetch(`https://6a1d0250bcc4f20d5ca3cb18.mockapi.io/Product/${id}`, {
            method: 'DELETE',
        });
        getProducts()
    }

    const editProduct=(id)=>{
        const product=products.find(ele=>ele.id===id)
        setProduct(product)
        navigate("/create")
    }

    const updateProduct=async(data,id)=>{
        const resp = await fetch(`https://6a1d0250bcc4f20d5ca3cb18.mockapi.io/Product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        setProduct()
        getProducts()
    }

    useEffect(() => {
        getProducts()
    }, [])
        
return <MyContext.Provider value={{ product,products, CreateProduct, deleteProduct, editProduct, updateProduct, product }}>
        {children}
    </MyContext.Provider>
}
