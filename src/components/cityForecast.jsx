import React from 'react'

import FiveDayForecast from './fiveDayForecast'
import LocalForecast from './localForecast'

export default function CityForecast() {
  return (
    <>
        <div className='bg-slate-100 mx-2 dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid rounded'>
            <LocalForecast/>
            <FiveDayForecast/>
        </div>
    </>
  )
}
