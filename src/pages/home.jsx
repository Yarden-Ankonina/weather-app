import React from 'react'

import CityForecastContainer from '../components/cityForecastContainer';
import { getCityForecast } from '../utils/getCityForecast';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-start border-t border-solid border-slate-500 dark:border-none h-full relative'>
        <CityForecastContainer/>
      </div>
    </>
  )
}
