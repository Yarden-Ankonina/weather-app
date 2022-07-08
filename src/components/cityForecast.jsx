import React from 'react'

import FiveDayForecast from './fiveDayForecast'
import LocalForecast from './localForecast'

export default function CityForecast() {
  return (
    <>
    <div className=' bg-slate-100 dark:bg-slate-800/30 bg-opacity-20 border dark:border-none border-solid rounded'>
        <LocalForecast/>
        <FiveDayForecast/>
    </div>
    </>
  )
}
