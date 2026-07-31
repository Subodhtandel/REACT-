import React from 'react'

const Create = () => {
  return (
    <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Add User</h4>
                </div>

                <div className="card-body">
                    <form id="userForm">

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" id="name" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" id="phone" className="form-control" required />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Add User
                        </button>

                    </form>
                </div>
            </div>
        </div>
  )
}

export default Create