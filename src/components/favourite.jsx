import React, { useContext, useEffect, useState } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'
import { storageService } from '../utils/localStorage.service';

export default function Favourite() {
    const {favouriteClick,favouriteList,SetFavouriteList, city,favourite,SetFavourite} = useContext(WeatherAppContext)

    const onClick = ()=>{
        favouriteClick()
        // SetFavourite(favourite? false : true);
    }
    
  return (
    <>
        <button onClick={onClick}  className='flex items-center justify-center text-3xl dark:text-yellow-500 text-blue-800 hover:text-blue-700  hover:dark:text-yellow-400'>{favourite ?  <>&#9733;</> : <>&#9734;</>}</button>
    </>
  )
}
