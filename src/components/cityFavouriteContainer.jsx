import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'

import CityFavourite from './cityFavourite'

export default function CityFavouriteContainer() {  
  const {status, favourites}= useContext(WeatherAppContext)
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
       {status === 'success' && favourites.length > 0 &&(
        <div className='flex flex-wrap justify-center items-center m-2 bg-none  dark:border-none border border-solid rounded'>
          {favourites.map((city)=>(
          <CityFavourite city={city} />
            ))
            }
        </div>)
      }
        
    </>
  )
}
