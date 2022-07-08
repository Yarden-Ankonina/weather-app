import React from 'react'
import getFiveDayForecast from '../utils/weatherService';
import WeatherBox from './weatherBox'

export default function FiveDayForecast() {

    const weeklyForecast = getFiveDayForecast();
    const forecast = weeklyForecast.DailyForecasts;
    console.log(new Date(forecast[0].Date));
  return (
    <>
        <div className=' flex flex-row mt-2 flex-wrap justify-center items-center'>
            <div className='flex flex-col '>
                {forecast.map((dailyForecast,idx) => <WeatherBox dailyForecast={dailyForecast} key={idx} currentDate={new Date(forecast[0].Date)}/>)}
            </div>
        </div>
    </>
  )
}
