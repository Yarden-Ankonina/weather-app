import React, { useContext, } from 'react';

import { WeatherAppContext } from '../contexts/weatherAppContext';
import { numToTwoChar } from '../utils/convertScale';
import Favourite from './favourite';

export default function LocalForecast({city}) {
    const {isCelsius, toggleWeatherAppScale} = useContext(WeatherAppContext)
  return (
    <>
        {city &&(

        <div className='flex flex-col items-start p-2 rounded-xl dark:text-slate-200 bg-cyan-50/60 border-solid border-cyan-800 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-400 relative' >
            <button onClick={toggleWeatherAppScale} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>{isCelsius ?<>&#8451;</>:<>&#8457;</>}</button>
            <div className='flex items-center justify-start pb-2 border-b w-full border-solid dark:border-slate-700 border-slate-300'>
                <img alt="weatherIcon" className='w-16 h-10' src={"https://developer.accuweather.com/sites/default/files/" + numToTwoChar(city.weatherIcon) + "-s.png"} />
                <div className=' text-slate-900 mr-3 text-3xl dark:text-slate-200 font-medium '>{city.cityName}</div>
            </div>
            <div className='flex items-center w-full p-1 shadow justify-between'>
                <div className='font-medium' >Current Weather</div>
                <div className='text-2xl font-medium'> {isCelsius ?<>{city.temperture.celsius}&deg;</>:<>{city.temperture.fahrenheit}&deg;</>}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>City</div>
                <div className=' text-slate-900 dark:text-slate-200'>{city.cityArea}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>Country/State</div>
                <div className='text-slate-800 dark:text-slate-300'>{city.countryName}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div className='text-slate-800 dark:text-slate-300'>Description</div>
                <div className='text-slate-800 dark:text-slate-300'>{city.weatherText}</div>
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <Favourite/>
            </div>
        </div>
        )}   
    </>
  )
}
