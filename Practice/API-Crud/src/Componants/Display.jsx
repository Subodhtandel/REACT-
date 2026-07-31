import { useContext } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "./MyContext"

export const Display = () => {

    const { products, deleteProduct ,editProduct} = useContext(MyContext)


    return <div className="card p-3">
        <h4> Product List <span><Link to="create" className="btn btn-success">ADD</Link></span></h4>

        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>

            <tbody>

                {products.map(ele => 
                <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>{ele.qty}</td>
                    <td>
                        <button className="btn btn-warning btn-sm" onClick={() => editProduct(ele.id)}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(ele.id)}>Delete</button>
                    </td>
                </tr>)}

            </tbody>

        </table>
    </div>
}