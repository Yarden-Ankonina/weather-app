import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'

import CityFavourite from './cityFavourite'

export default function CityFavouriteContainer() {  
  const {status, favouriteList}= useContext(WeatherAppContext)
  
  return (
    <>
       {status === 'success' && (
        <div className='flex flex-wrap justify-center items-center m-2 bg-none rounded'>
            {favouriteList &&(
              favouriteList.map((locationKey,idx)=>(
                <CityFavourite key={idx} locationKey={locationKey}/>
              ))
            )}
        </div>)
      }
    </>
  )
}
