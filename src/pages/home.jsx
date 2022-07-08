import React from 'react'

import { useTheme } from '../utils/themeProvider';
import { GetPCheck} from '../utils/weatherService'
import FiveDayForecast from '../components/fiveDayForecast';


export default function Home() {
  
  const theme = useTheme();
  const isDarkMode = theme === "dark";


  const cityForcast = GetPCheck()
  return (
    <>
      <div className=' flex flex-col justify-center items-center  border-t border-solid border-slate-500 dark:border-none h-full  relative '>
        <div className='flex flex-col items-center absolute rounded-3xl shadow-xl shadow-slate-700 top-10 m-3 opacity-75 w-1/2 h-3/4 p-3 text-lg font-medium ' style={{backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)", backgroundSize : "cover"}} >
            {cityForcast.name}
            {cityForcast.country.EnglishName}
            ,  {cityForcast.country} <br/>
            {cityForcast.forecast.Temperature.Metric.Value}&#8451; 
            or {cityForcast.forecast.Temperature.Imperial.Value}&#8457;
            <img className='w-16 h-10' src='https://developer.accuweather.com/sites/default/files/01-s.png'/>
        </div>
        <div className='z-10 m-2 mb-10 flex flex-row'>
            <input className='pl-2 p-0.5 bg-sky-50 dark:bg-zinc-800 border border-solid border-slate-800 dark:border-slate-500 dark:border-2 rounded dark:text-zinc-300'  type="text" placeholder='&#128269; Tel Aviv'/>
        </div>
        {/*  style={{backgroundColor :"rgba(180,200,200,60%)"} */}
        <div className='z-10 flex flex-col items-center justify-around border-2 border-solid bg-sky-50 border-stone-400 p-3 dark:bg-transparent shadow-xl dark:border-slate-700 rounded dark:border-4 dark:bg-neutral-900 '>
          <div className='flex p-3 dark:text-slate-100 justify-between'>
            <div className='flex items-center'>
            </div>
            <div className='flex flex-col items-center'>
              <div className='mr-2 mb-2 text-4xl'>&hearts;</div>
              <button className='shadow border border-slate-200 dark:border-slate-800 bg-transparent shadow-slate-400 rounded p-1 hover:bg-slate-100 hover:dark:bg-slate-200' >Add To Favourites</button>
            </div>
          </div>
          <div className=' flex flex-row p-2 flex-wrap justify-center items-center'>
            <FiveDayForecast/>
            
          </div>
        </div>
      </div>
    </>
  )
}
