import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Container
