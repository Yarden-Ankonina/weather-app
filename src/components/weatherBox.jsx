import React, { useContext } from 'react'
import { TemperatureContext } from '../contexts/temperatureContext';
import { toCelsius } from '../utils/convertScale';

export default function WeatherBox({dailyForecast, currentDate}){
  const {isCelsius} = useContext(TemperatureContext);
  const date = new Date(dailyForecast.Date)
  const isCurrentDate = (date.getDate() === currentDate.getDate());

  const colorCurrentDateBg = ()=>{
    if(isCurrentDate){
      return "bg-cyan-500 dark:bg-emerald-800 ";
    }
  }
  return (
    <>  
        <div className={`flex border-solid ${colorCurrentDateBg()}  items-center justify-between px-2 py-1 dark:text-slate-200 border-zinc-500 dark:border-slate-600`} >
            <div className='flex flex-col p-1 rounded'>      
              <div className='text-lg self-start'>{date.toUTCString().slice(0,3)}</div>
            </div>
            <div className='flex'>
              {
                isCelsius ? 
                <div className='font-bold mr-1 text-lg'><span className='text-lg'>{Math.floor(toCelsius(dailyForecast.Temperature.Maximum.Value))}</span>&deg;/<span className='text-sm text-slate-800 dark:text-slate-300'>{Math.floor(toCelsius(dailyForecast.Temperature.Minimum.Value))}</span>&deg;</div>
                :<div className='font-bold mr-1'><span className='text-lg'>{dailyForecast.Temperature.Maximum.Value}</span>&deg;/<span className='text-sm text-slate-800 dark:text-slate-300'>{dailyForecast.Temperature.Minimum.Value}</span>&deg;</div>
              }
            </div>
        </div>
    </>
  )
}
