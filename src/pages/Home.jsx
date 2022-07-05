import React from 'react'
import WeatherBox from '../components/WeatherBox'

export default function Home() {
  return (
    <>
      <div className='flex flex-col  justify-center border-t border-solid border-slate-500 dark:border-none items-center h-5/6   '>
        <div className='m-2 mb-10 flex flex-row'>
            <input className='pl-2 p-0.5 border border-solid border-slate-800 dark:border-slate-700 dark:border-4 rounded dark:bg-slate-200 '  type="text" placeholder='&#128269; Tel Aviv'/>
        </div>
        <div className='flex flex-col justify-around border border-solid border-cyan-200 p-3 dark:bg-transparent shadow-xl dark:border-slate-700 rounded dark:border-4 dark:bg-neutral-900 '>
          <div className='flex p-3 text-slate-100 justify-between'>
            <div className='flex'>
              <p className='mr-1'>Weather</p>
              <p>Location</p>
            </div>
            <div className='flex'>
              <div className='mr-1'>&hearts;</div>
              <div>Add To Favourites</div>
            </div>
          </div>
          <div className='flex flex-row p-2 flex-wrap justify-center items-center'>
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
