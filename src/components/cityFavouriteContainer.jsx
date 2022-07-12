import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'
import { storageService } from '../utils/localStorage.service'

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
        <div className='flex flex-wrap justify-center items-center m-2 bg-none  dark:border-none border border-solid rounded'>
          {/* {favourites.map((city, idx)=>(
          <CityFavourite key={idx} city={city} />
            ))
            } */}
            {favouriteList &&(
              favouriteList.map((locationKey,id)=>(
                <CityFavourite locationKey={locationKey}/>
              ))
            )}
        </div>)
      }
        
    </>
  )
}
