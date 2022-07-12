import React from 'react'
import WeatherBox from './weatherBox'

export default function FiveDayForecast({city}) {

  return (
    <>
        <div className=' flex w-full flex-row mt-2 flex-wrap justify-center items-center '>
            <div className='flex flex-col w-full'>
              {city && city.fiveDayForecast && (
                city.fiveDayForecast.map((dailyForecast,idx) => <WeatherBox dailyForecast={dailyForecast} key={idx} currentDate={new Date(city.fiveDayForecast[0].Date)}/>)
              )}
            </div>
        </div>
    </>
  )
}
