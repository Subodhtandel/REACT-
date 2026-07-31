import React, { useContext } from 'react'
import { Store } from './Store'

const Display = () => {

    const { users } = useContext(Store)

    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h4>User List</h4>
                </div>

                <div className="card-body">
                    <table className="table table-bordered table-striped text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody id="userTable">

                            {users.map((ele,index)=>  <tr key={ele.id}>
                                <td>{index+1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                            </tr>)}
                          

                           
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Display