import React from 'react'

import CityForecastContainer from '../components/cityForecastContainer';
import SearchLocationContainer from '../components/searchLocationContainer';

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
      <div className='flex flex-col items-center justify-start border-t border-solid border-slate-500 dark:border-none h-full relative'>
        <CityForecastContainer/>
      </div>
    </>
  )
}
