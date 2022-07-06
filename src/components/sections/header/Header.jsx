import {React} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header() {

  function HeaderLogo(){
      const sunLogo = "https://img.icons8.com/dusk/344/summer.png";
      const moonLogo = "https://img.icons8.com/dusk/344/partly-cloudy-night--v1.png";
      const theme = "dark";
      let logoRes;
      if(theme === "dark"){
        logoRes = moonLogo;
      }
      else{
        logoRes = sunLogo;
      }
      return <img alt='logo' className='w-8 h-8 ml-2 ' src={logoRes} />
    }

    function ThemeMessege(){
      const theme = "dark";
      let msg;
      if(theme === "dark"){
        msg = "dark";
      }
      else{
        msg = "light";
      }
      return msg
    }

  return (
    <>
        <div className='flex bg-transparent p-2 justify-between  dark:bg-black border-solid  border-b border-zinc-100 dark:border-none '>
            <h1 className='text-2xl	font-bold m-0.5 ml-2 text-zinc-800 flex dark:text-slate-300 '>Weather App <HeaderLogo/></h1>
            <span className=' mr-1'>
                <button className='p-1 mr-2 border-solid border rounded border-zinc-600 dark:text-zinc-300 hover:bg-zinc-100'><ThemeMessege/></button>
                <button className='m-0.5  p-1 rounded border-solid border border-zinc-600 bg-zinc-200 dark:bg-zinc-300  dark:border-none hover:bg-zinc-300 '><Link to='/'>Home</Link></button>
                <button className='m-0.5 p-1 rounded border-solid border border-zinc-600 bg-zinc-200 dark:bg-zinc-300 dark:border-none hover:bg-zinc-300'><Link to='/favourites'>Favourites</Link></button>
            </span>
        </div>
    </>
  )
}
