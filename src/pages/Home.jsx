import React from 'react'
import WeatherBox from '../components/weatherBox'

export default function Home() {
  
  return (
    <>
      <div className=' flex flex-col  justify-center border-t border-solid border-slate-500 dark:border-none items-center h-5/6   '>
        <div className='z-10 m-2 mb-10 flex flex-row'>
            <input className='pl-2 p-0.5 bg-sky-50 dark:bg-zinc-800 border border-solid border-slate-800 dark:border-slate-500 dark:border-2 rounded dark:text-zinc-300'  type="text" placeholder='&#128269; Tel Aviv'/>
        </div>
        <div className='z-10 flex flex-col justify-around border-2 border-solid bg-sky-50 border-stone-400 p-3 dark:bg-transparent shadow-xl dark:border-slate-700 rounded dark:border-4 dark:bg-neutral-900 '>
          <div className='flex p-3 dark:text-slate-100 justify-between'>
            <div className='flex items-center'>
              <p className='mr-1'>Weather</p>
              <p>Location</p>
            </div>
            <div className='flex items-center'>
              <div className='mr-2'>&hearts;</div>
              <button className='shadow bg-slate-50 dark:bg-transparent shadow-slate-400 rounded p-1 dark:text-slate-200 hover:bg-slate-100 hover:dark:bg-slate-700' >Add To Favourites</button>
            </div>
          </div>
          <div className=' flex flex-row p-2 flex-wrap justify-center items-center'>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
            <WeatherBox/>
          </div>
        </div>
      </div>
    </>
  )
}
