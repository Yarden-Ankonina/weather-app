import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NoMatch() {
  return (
    <>
        <Navbar/>
        <div>Nothing To Find Here, Please Go Back Home</div>
        <div><Link to='/'>Home</Link></div>
    </>
  )
}
