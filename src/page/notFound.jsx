import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className='flex flex-col justify-center items-center dark:text-slate-200 h-5/6'>
        <div>Nothing To Find Here, Please Go Back Home</div>
        <button className='border border-solid border-slate-600 p-1 mt-2 rounded hover:dark:bg-slate-700'><Link to='/'>Home</Link></button>
      </div>
    </>
  )
}
