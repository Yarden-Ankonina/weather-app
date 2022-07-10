import React from "react";

import CityForecastContainer from "../components/cityForecastContainer";
import SearchLocationContainer from "../components/searchLocationContainer";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start pt-1 h-full border-t border-solid border-slate-500 dark:border-none relative">
        <SearchLocationContainer />
        {/* <button className='text-6xl mb-2 font-light text-red-500' onClick={toggleHeart}>&#9825;</button> */}
        <div className="flex w-full justify-center items-center mt-6 ">
          <CityForecastContainer />
        </div>
      </div>
    </>
  );
}
