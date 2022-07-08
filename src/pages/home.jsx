import React from 'react'

import CityForecastExpanded from '../components/cityForecastExpanded';


export default function Home() {
  
  const toggleHeart = (e)=>{
    const fullHeart = 9829;
    const emptyHeart = 9825;
    const innerHTML = e.target.innerHTML;
    (innerHTML.codePointAt(0) === fullHeart)? e.target.innerHTML = `&#${emptyHeart};` : e.target.innerHTML =`&#${fullHeart};`;
  }
 
  return (
    <>
      {/* <img className='w-full absolute t-0' src={"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/> */}
      <div className='flex flex-col items-center justify-start border-t border-solid border-slate-500 dark:border-none h-full  relative '>
        <div className='mt-2 flex flex-row'>
            <input className='p-0.5 bg-sky-50 dark:bg-zinc-800 border border-solid border-slate-800 dark:border-slate-500 dark:border-2 rounded dark:text-zinc-300'  type="text" placeholder='&#128269; Tel Aviv'/>
        </div>
        <button className='text-6xl mb-2 font-light text-red-500' onClick={toggleHeart}>&#9825;</button>
        {/* style={{backgroundImage : "url(https://images.unsplash.com/photo-1438179152657-8ce7dfda4f0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",backgroundSize:"cover"}} */}
        <div className='flex w-full justify-center items-start'>
          <CityForecastExpanded/>
        </div>
      </div>
    </>
  )
}
