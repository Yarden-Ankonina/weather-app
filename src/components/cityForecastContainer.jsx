
import React, {useContext} from 'react'

import FiveDayForecast from './fiveDayForecast';
import LocalForecast from './localForecast';

import { WeatherAppContext } from '../contexts/weatherAppContext';

export default function CityForecastContainer() {
  const {city} = useContext(WeatherAppContext);
  
  return (
    <>
       {city?
        <div className='bg-slate-50 w-3/4 mx-2 lg:w-1/4 md:w-1/3 sm:w-1/2 mt-6 dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid border-cyan-600 rounded-xl'>
        <LocalForecast city={city} />
        <FiveDayForecast city={city}/>
        </div>
        :<></>
      }
    </>
  )
}


  

