import React from 'react'
import { Navbar } from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export const SingleUser = () => {
  return (
    <div>
        <Navbar/>
        <div className='single-user-grid'>
        <Sidebar/>
        </div>
        
    </div>
  )
}
