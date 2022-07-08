import React from 'react'

import CityForecast from '../components/cityForecast'

export default function Favourites() {
   return (
    <>
       <div className='flex flex-wrap border-t border-solid dark:border-none border-slate-500 items-center h-5/6 justify-center  '>
        <CityForecast/>
        <CityForecast/>
        <CityForecast/>
        <CityForecast/>
      </div>
    </>
  )
}
