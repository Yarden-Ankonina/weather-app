import React from 'react'

import CityFavouriteContainer from '../components/cityFavouriteContainer'

export default function Favourites() {
   return (
    <>
    <div className='flex items-center justify-center h-5/6'>
      <div className='flex flex-wrap justify-center items-center  '>
        <CityFavouriteContainer/>
        <CityFavouriteContainer/>
        <CityFavouriteContainer/>
        <CityFavouriteContainer/>
      </div>
    </div>
   
    </>
  )
}
