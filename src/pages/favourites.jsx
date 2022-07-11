import React, { useContext } from 'react'

import CityFavouriteContainer from '../components/cityFavouriteContainer'
import { WeatherAppContext } from '../contexts/weatherAppContext'

export default function Favourites() {
  const {favourites} = useContext(WeatherAppContext)
  console.log(favourites);
  console.log(favourites && Object.keys(favourites).length >0)
   return (
    <>
    <div className='flex items-center justify-center h-5/6'>
      <div className='flex flex-wrap justify-center items-center  '>
        {
          favourites && Object.keys(favourites).length >0 ?
          <>{console.log(favourites.city)}true</>:<>false</>
        }
        {/* <CityFavouriteContainer/>
        <CityFavouriteContainer/>
        <CityFavouriteContainer/>
        <CityFavouriteContainer/> */}
      </div>
    </div>
   
    </>
  )
}
