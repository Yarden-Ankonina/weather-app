import React from 'react'
import { toCelsius } from '../utils/convertScale';

export default function WeatherBox({dailyForecast, key, isCelsius, currentDate}){
  const date = new Date(dailyForecast.Date)
  const isCurrentDate = (date.getDate() === currentDate.getDate());

  const getCurrentDateProp = ()=>{
    if(isCurrentDate){
      return "bg-cyan-500 dark:bg-emerald-800 ";
    }
  }
  
 
  return (
    <>  
          <div className={`flex border-solid ${getCurrentDateProp()}  items-center justify-between p-1 dark:text-slate-200 border-zinc-500 dark:border-slate-600`} >
            <div className='flex flex-col  w-full p-1 mr-8 rounded'>      
              <div className='text-lg self-start'>{date.toUTCString().slice(0,3)}</div>
            </div>
            <div className='flex '>
              {
                isCelsius ? 
                <div className='font-bold mr-1'>{Math.floor(toCelsius(dailyForecast.Temperature.Maximum.Value))}&deg;</div>
                :<div className='font-bold mr-1'>{dailyForecast.Temperature.Maximum.Value}&deg;</div>
              }
            </div>
        </div>
    </>
  )
}
