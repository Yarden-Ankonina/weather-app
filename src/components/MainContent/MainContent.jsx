import React from 'react'
import WeatherBox from '../WeatherBox'

export default function MainContent() {
  return (
    <>
        <div className=' justify-center bg-slate-50 dark:bg-slate-600  h-full'>
            <div className='flex flex-wrap border border-solid border-slate-500 items-center h-5/6 justify-center '>
                <WeatherBox/>
                <WeatherBox/>
                <WeatherBox/>
                <WeatherBox/>
                <WeatherBox/>
            </div>
        </div>
        Main Content
    </>
  )
}
