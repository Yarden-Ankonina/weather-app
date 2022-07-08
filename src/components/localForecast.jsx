import React from 'react'
import { GetPCheck } from '../utils/weatherService';

export default function LocalForecast() {
    const cityForcast = GetPCheck()
    const isCelsius = true;
  return (
    <>
        <div className='flex flex-col items-start p-2 rounded-xl dark:text-slate-200 bg-sky-500 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-400 relative' >
            <button className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>&#8451;</button>
            <div className='flex border-b w-full border-solid'>
               <img className='w-16 h-10' src='https://developer.accuweather.com/sites/default/files/01-s.png'/>
                {isCelsius 
                    ?<div className='text-3xl font-sans font-medium'>{cityForcast.forecast.Temperature.Metric.Value}<span>&deg;</span></div>
                    :<div className='text-3xl font-sans font-medium'>{cityForcast.forecast.Temperature.Imperial.Value}&deg;</div>
                }
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div >Current Weather</div>
                {isCelsius 
                ?<div className='font-medium'>{cityForcast.forecast.Temperature.Metric.Value}<span>&deg;</span></div>
                :<div className='font-medium'>{cityForcast.forecast.Temperature.Imperial.Value}&deg;</div>
                }
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>Time</div>
                <div className=''>12:30</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>Air Quality</div>
                <div className=''>Fair</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>City</div>
                <div className=' text-slate-900 dark:text-slate-200'>{cityForcast.name}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>Country/State</div>
                <div className='text-slate-800 dark:text-slate-300'>{cityForcast.country}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>Humidity</div>
                <div>47&deg;</div>
            </div>
        </div>
    </>
  )
}
