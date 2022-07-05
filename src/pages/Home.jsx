import React from 'react'
import WeatherBox from '../components/WeatherBox'

export default function Home() {
  return (
    <>
      <div className='flex flex-wrap border-t border-solid border-slate-500 items-center h-5/6 justify-center  '>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
      </div>
    </>
  )
}
