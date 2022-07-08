import React from 'react'
import FiveDayForecast from './fiveDayForecast'
import LocalForecastExpanded from './localForecastExpanded'

export default function CityForecastExpanded() {
  return (
    <>
        <div className='bg-slate-100 w-3/4 mx-2 lg:w-1/4 md:w-1/3 sm:w-1/2  dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid rounded'>
            <LocalForecastExpanded/>
            <FiveDayForecast/>
        </div>
    </>
  )
}
