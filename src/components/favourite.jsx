import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'

export default function Favourite() {
    const {favouriteClick, favourite} = useContext(WeatherAppContext)

    const onClick = ()=>{
        favouriteClick()
    }
    
  return (
    <>
        <button onClick={onClick}  className='flex items-center justify-center text-3xl dark:text-yellow-500 text-blue-800 hover:text-blue-700  hover:dark:text-yellow-400'>{favourite ?  <>&#9733;</> : <>&#9734;</>}</button>
    </>
  )
}
