import React from 'react'

export default function WeatherBox(props){
  const dailyForcast = props.dailyForecast;
  const date = new Date(dailyForcast.Date)
  
  return (
    <>
        <div className='flex border-solid bg-gradient-to-t from-cyan-200 to-cyan-400 items-center justify-between border-zinc-500 bg-zinc-200 dark:bg-slate-300 dark:border-slate-600 m-2 h-fit rounded'>
            <div className='flex flex-col  w-full p-2 mr-4 rounded'>      
              <div className='text-lg self-start'>{date.toUTCString().slice(0,3)}</div>
              {/* <div className=''>{date.getDate()}/{date.getMonth()}</div> */}
            </div>
            <div className='flex '>
              <div className='font-bold mr-1'>{dailyForcast.Temperature.Maximum.Value}&deg;</div>
              <div className=''>{dailyForcast.Temperature.Minimum.Value}&deg;</div>
            </div>
            <img/>
        </div>
    </>
  )
}
