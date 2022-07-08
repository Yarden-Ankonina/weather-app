import {React} from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '../../hooks/useTheme';




export default function Header() {

  const sunLogo = "https://img.icons8.com/dusk/344/summer.png";
  const moonLogo = "https://img.icons8.com/dusk/344/partly-cloudy-night--v1.png";

  const {toggleTheme, isDarkMode} = useTheme();

  return (
    <>
        <div className='flex bg-transparent p-2 justify-between items-center flex-col sm:flex-row dark:bg-black border-solid  border-b border-zinc-100 dark:border-zinc-900 '>
            <h1 className='text-2xl mb-3 sm:m-0	font-bold m-0.5 ml-2 text-zinc-800 flex dark:text-slate-300 '>Weather App 
              {isDarkMode()
                ? <img alt='logo' className='w-8 h-8 ml-2 ' src={moonLogo}/>
                : <img alt='logo' className='w-8 h-8 ml-2 ' src={sunLogo} />
              }
            </h1>
            <span className='mr-1 flex flex-row flex-wrap justify-center'>
                <button type='button' className='m-0.5  p-1 rounded border-solid border border-zinc-600 bg-zinc-200 dark:bg-zinc-400  dark:border-none hover:bg-zinc-300 hover:dark:bg-zinc-300 font-medium' ><Link to='/'>Home</Link></button>
                <button className='m-0.5 p-1 rounded border-solid border border-zinc-600 bg-zinc-200 dark:bg-zinc-400 dark:border-none hover:bg-zinc-300 hover:dark:bg-zinc-300 font-medium'><Link to='/favourites'>Favourites</Link></button>
                <button className='p-1 m-1 border-solid border rounded border-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 hover:dark:bg-zinc-800 ' onClick={toggleTheme}>
                  {isDarkMode() ? "Dark" : "Light"}
                </button>
            </span>
        </div>
    </>
  )
}
