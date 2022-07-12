import React, { useContext } from 'react'
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom'

import { WeatherAppContext } from '../contexts/weatherAppContext'
import { getCityForecast } from '../utils/getCityForecast'
import { numToTwoChar } from '../utils/convertScale'

export default function CityFavourite(locationKey) {
    const {isCelsius, showForeCastOnHomePage, toggleWeatherAppScale} = useContext(WeatherAppContext)
    const { data:city} = useQuery(['favoriteCity', locationKey.locationKey], getCityForecast)
    const onClick = ()=>{
        showForeCastOnHomePage(locationKey.locationKey);
    }

    return (
    <>
        {city ?
            <div className=" flex flex-col ">
            <div  className='flex flex-col items-center m-2 p-2 dark:text-slate-200 bg-cyan-50/60 border-solid border-cyan-800 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-500 rounded relative' >
            <button onClick={toggleWeatherAppScale} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>{isCelsius ?<>&#8451;</>:<>&#8457;</>}</button>
                <div className='felx justify-between '>
                    <div className='text-lg text-slate-900 dark:text-slate-200'>{city.cityName}</div>
                    <div className='text-slate-800 dark:text-slate-300'>{city.countryName}</div>
                </div>
                <div className='flex'>
                    <div className='text-3xl font-sans font-medium'>{isCelsius ?<>{Math.floor(city.temperture.celsius)}&deg;</>:<>{Math.floor(city.temperture.fahrenheit)}&deg;</>}</div>
                    <img alt="weatherIcon" className='w-16 h-10' src={"https://developer.accuweather.com/sites/default/files/" + numToTwoChar(city.weatherIcon) + "-s.png"} />
                </div>
            </div>
            <Link to='/' onClick={onClick} className="bg-cyan-500 dark:bg-emerald-800 hover:dark:bg-emerald-700 py-1 m-2 font-medium">
                More Details
            </Link>
            </div>

            :<></>
        }
    </>
  )
}
