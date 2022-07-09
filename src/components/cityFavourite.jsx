import React from 'react'

import { GetPCheck } from '../utils/weatherService'

export default function CityFavourite() {
    const cityForcast = GetPCheck()
    console.log(cityForcast);
    const isCelsius = true;
  return (
    <>
        <div className='flex flex-col items-center p-2 dark:text-slate-200 bg-sky-500 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-500 rounded relative' >
            <div className='absolute right-0 top-0 w-7 h-7 align-middle text-center '>&#8451;</div>
            
            <div className='felx justify-between '>
                <div className='text-lg text-slate-900 dark:text-slate-200'>{cityForcast.name}</div>
                <div className='text-slate-800 dark:text-slate-300'>{cityForcast.country}</div>
            </div>
            <div className='flex'>
                {isCelsius 
                    ?<div className='text-3xl font-sans font-medium'>{cityForcast.forecast.Temperature.Metric.Value}<span>&deg;</span></div>
                    :<div>{cityForcast.forecast.Temperature.Imperial.Value}&#8457;</div>
                }
                <img className='w-16 h-10' src='https://developer.accuweather.com/sites/default/files/01-s.png'/>
            </div>
           
        </div>
    </>
  )
}
