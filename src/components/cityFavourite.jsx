import React, { useContext } from 'react'
import { WeatherAppContext } from '../contexts/weatherAppContext'
import { numToTwoChar } from '../utils/convertScale'

export default function CityFavourite({city}) {
    const {isCelsius, toggleWeatherAppScale} = useContext(WeatherAppContext)
  return (
    <>
        <div className='flex flex-col items-center m-2 p-2 dark:text-slate-200 bg-sky-500 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-500 rounded relative' >
        <button onClick={toggleWeatherAppScale} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>{isCelsius ?<>&#8451;</>:<>&#8457;</>}</button>
            {/* <div className='absolute right-0 top-0 w-7 h-7 align-middle text-center '>{isCelsius? <>&#8451;</> :<>&#8457;</>}</div> */}
            <div className='felx justify-between '>
                <div className='text-lg text-slate-900 dark:text-slate-200'>{city.cityName}</div>
                <div className='text-slate-800 dark:text-slate-300'>{city.countryName}</div>
            </div>
            <div className='flex'>
                <div className='text-3xl font-sans font-medium'>{isCelsius ?<>{Math.floor(city.temperture.celsius)}&deg;</>:<>{Math.floor(city.temperture.fahrenheit)}&deg;</>}</div>
                <img alt=" " className='w-16 h-10' src={"https://developer.accuweather.com/sites/default/files/" + numToTwoChar(city.weatherIcon) + "-s.png"}/>
            </div>
        </div>
    </>
  )
}
