import React from 'react'
import getFiveDayForecast from '../utils/weatherService';
import WeatherBox from './weatherBox'

export default function FiveDayForecast({city, isCelsius}) {

    const weeklyForecast = getFiveDayForecast();
    const forecast = weeklyForecast.DailyForecasts;
  return (
    <>
        <div className=' flex w-full flex-row mt-2 flex-wrap justify-center items-center '>
            <div className='flex flex-col w-full'>
                {forecast.map((dailyForecast,idx) => <WeatherBox dailyForecast={dailyForecast} key={idx} isCelsius={isCelsius} currentDate={new Date(forecast[0].Date)}/>)}
            </div>
        </div>
    </>
  )
}
