import React from 'react'

import FiveDayForecast from './fiveDayForecast'
import LocalForecast from './localForecast'

export default function CityForecast({city, isCelsius, toggleTemperatureScale}) {
  
  return (
    <>
        <div className='bg-slate-50 w-3/4 mx-2 lg:w-1/4 md:w-1/3 sm:w-1/2  dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid border-cyan-600 rounded-xl'>
          <LocalForecast city={city} isCelsius={isCelsius} toggleScale={toggleTemperatureScale}/>
          <FiveDayForecast city={city} isCelsius={isCelsius}/>
        </div>
    </>
  )
}
