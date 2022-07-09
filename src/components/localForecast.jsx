import React from 'react';
import {useQuery, useQueryClient} from 'react-query';

import { mockFetchCurrentWeather, mockFetchCityByLocationKey } from '../utils/mockServerJsonService';
import { GetPCheck, fetchCurrentConditions } from '../utils/weatherService';

export default function LocalForecast({city, isCelsius, toggleScale}) {
   
    const celsius = '&#8451;';
    const fahrenheit = '&#8457;';
    let degreeSign;
    isCelsius ? degreeSign = celsius : degreeSign = fahrenheit;

    const onClick = (e)=>{
        toggleScale()
        isCelsius ? degreeSign = celsius : degreeSign = fahrenheit;
        console.log(e.target.innerHTML = degreeSign)
    }
  return (
    <>
        <div className='flex flex-col items-start p-2 rounded-xl dark:text-slate-200 bg-cyan-50/60 border-solid border-cyan-800 dark:bg-sky-800 shadow-md dark:shadow-sm dark:shadow-slate-400 relative' >
            {isCelsius ?
                <button onClick={onClick} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>&#8451;</button>
                : <button onClick={onClick} className='absolute right-0 top-0 w-7 h-7 align-middle text-center hover:text-slate-700'>&#8457;</button>
            }
            
            
            <div className='flex border-b w-full border-solid'>
                
               <img className='w-16 h-10' src='https://developer.accuweather.com/sites/default/files/01-s.png'/>
                {isCelsius 
                    ?<div className='text-3xl font-sans font-medium'>{city.temperture.celsius}<span>&deg;</span></div>
                    :<div className='text-3xl font-sans font-medium'>{city.temperture.fahrenheit}&deg;</div>
                }
               
            </div>
            <div className='flex w-full p-1 shadow justify-between'>
                <div >Current Weather</div>
                {isCelsius  
                    ?<div className='font-medium'>{city.temperture.celsius}<span>&deg;</span></div>
                    :<div className='font-medium'>{city.temperture.fahrenheit}&deg;</div>
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
             <div></div>
                <a className=' flex text-slate-800 dark:text-slate-300' href={`${city.Link}`} target="_blank">   <div className='mr-2'>More Information</div><img className='w-7 h-7 flex justify-center items-center hover:scale-105' src="https://img.icons8.com/windows/344/external-link-squared.png"/></a>
            </div>
        </div>
    </>
  )
}
