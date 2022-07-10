import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'

import CityFavourite from './cityFavourite'

export default function CityFavouriteContainer() {  
  const {isCelsius, city, status}= useContext(WeatherAppContext)
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
       {status === 'success'?
        <div className='bg-slate-100 m-2  dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid rounded'>
          <CityFavourite city={city} isCelsius={isCelsius} />
        </div>
      :<></>
      }
        
    </>
  )
}
