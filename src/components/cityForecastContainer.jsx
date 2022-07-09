import React from 'react'
import { useGeoPosition } from '../utils/mockServerJsonService'

import CityForecast from './cityForecast'
import SearchLocationContainer from './searchLocationContainer'

export default function CityForecastContainer() {
  return (
    <>
        <SearchLocationContainer/>
        <button className='text-6xl mb-2 font-light text-red-500' onClick={toggleHeart}>&#9825;</button>
        <div className='flex w-full justify-center items-start '>
        <CityForecast/>
        </div>
    </>
  )
}
