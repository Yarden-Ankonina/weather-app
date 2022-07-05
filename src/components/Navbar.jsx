import React from 'react'
import { Link } from 'react-router-dom'
// import {Home,Favourites} from '../pages/Home'

export default function Navbar() {
    const sunLogo = "https://img.icons8.com/dusk/344/summer.png";
    const moonLogo = "https://img.icons8.com/dusk/344/fog-night.png";

  return (
    <>
        <div className='flex bg-cyan-50 p-2 justify-between dark:bg-gray-800 border-solid  border border-cyan-600 dark:border-none bg-transparent '>
            <h1 className='text-2xl	font-bold m-0.5 ml-2 text-cyan-800 flex dark:text-slate-300 '>Weather App <img alt='logo' className='w-8 h-8 ml-2 ' src={moonLogo} /></h1>
            <span className=' mr-1'>
                <button className='m-0.5 p-1 rounded border-solid border border-cyan-600 bg-cyan-100 dark:bg-slate-300  dark:border-none'><Link to='/'>Home</Link></button>
                <button className='m-0.5 p-1 rounded border-solid border border-cyan-600 bg-cyan-100 dark:bg-slate-300 dark:border-none'><Link to='/favourites'>Favourites</Link></button>
            </span>
        </div>
    </>
  )
}