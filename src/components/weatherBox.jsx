import React from 'react'

export default function WeatherBox(props){
  const dailyForcast = props.dailyForecast;
  const date = new Date(dailyForcast.Date)
  const isCurrentDate = (date.getDate() === props.currentDate.getDate());

  const getCurrentDateProp = ()=>{
    if(isCurrentDate){
      return "bg-cyan-500 dark:bg-emerald-800 ";
    }
  }
 
  return (
    <>  
          <div className={`flex border-solid ${getCurrentDateProp()}  items-center justify-between p-1 dark:text-slate-200 border-zinc-500 dark:border-slate-600`} >
            <div className='flex flex-col  w-full p-1 mr-8 rounded'>      
              <div className='text-lg self-start'>{date.toUTCString().slice(0,3)}</div>
            </div>
            <div className='flex '>
              <div className='font-bold mr-1'>{dailyForcast.Temperature.Maximum.Value}&deg;</div>
            </div>
        </div>
    </>
  )
}
