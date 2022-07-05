import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <div>Nothing To Find Here, Please Go Back Home</div>
        <div><Link to='/'>Home</Link></div>
    </>
  )
}
