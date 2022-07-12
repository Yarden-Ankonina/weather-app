import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'

import CityFavourite from './cityFavourite'

export default function CityFavouriteContainer() {  
  const {status, favouriteList}= useContext(WeatherAppContext)
  
  return (
    <>
    {status === 'error'?
        <div>Something Went Wrong, Please Try Again Later</div>
        :<></>
      }
      {status === 'loading'?
        <div>...Loading</div>
        :<></>
      }
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
