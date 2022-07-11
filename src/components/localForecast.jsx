import React, { useContext } from 'react';

import { WeatherAppContext } from '../contexts/weatherAppContext';

export default function LocalForecast({city}) {
    const {isCelsius,toggleWeatherAppScale} = useContext(WeatherAppContext)

    const onClick = ()=>{
        toggleWeatherAppScale()
    }
  return (
    <>
        <div className='flex flex-col items-start p-2 rounded-xl dark:text-slate-200 bg-cyan-50/60 border-solid border-cyan-800 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-400 relative' >
            {isCelsius ?
                <button onClick={onClick} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>&#8451;</button>
                : <button onClick={onClick} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>&#8457;</button>
            }
            <div className='flex items-center justify-start border-b w-full border-solid'>
               <img alt="weatherIcon" className='w-16 h-10' src='https://developer.accuweather.com/sites/default/files/01-s.png'/>
                <div className=' text-slate-900 mr-3 text-3xl dark:text-slate-200 font-medium '>{city.cityName}</div>
                {/* {isCelsius 
                    ?<div className='text-3xl font-sans font-medium'>{city.temperture.celsius}<span>&deg;</span></div>
                    :<div className='text-3xl font-sans font-medium'>{city.temperture.fahrenheit}&deg;</div>
                } */}
            </div>
            <div className='flex items-center w-full p-1 shadow justify-between'>
                <div className='' >Current Weather</div>
                {isCelsius  
                    ?<div className='text-2xl font-medium'>{city.temperture.celsius}<span>&deg;</span></div>
                    :<div className='text-2xl font-medium'>{city.temperture.fahrenheit}&deg;</div>
                }
                
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div>City</div>
                <div className=' text-slate-900 dark:text-slate-200'>{city.cityName}</div>
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
             <div>
                <button className='flex items-center justify-center text-3xl dark:text-yellow-500 text-yellow-700 hover:text-yellow-600  hover:dark:text-yellow-400'>&#9734;</button>
             </div>
                <a className=' flex items-center text-slate-800 dark:text-slate-300' href={`${city.link}`} target="_blank"  rel="noreferrer">   <div className='mr-2'>More Information</div><img alt="more information" className='w-7 h-7 flex justify-center items-center hover:scale-105' src="https://img.icons8.com/windows/344/external-link-squared.png"/></a>
            </div>
        </div>
    </>
  )
}
