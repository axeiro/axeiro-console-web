import React from 'react'
import { Toaster } from 'react-hot-toast'
import { createVm } from '../../APIs/vmService'

const Dashboard = () => {
  const create = async()=>{
    createVm()
  }
  return (
    <div>
       <Toaster position='top-center' />
        <button onClick={create}> create vm</button>
      </div>
  )
}

export default Dashboard