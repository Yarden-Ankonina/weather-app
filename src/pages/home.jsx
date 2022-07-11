import React from "react";

import CityForecastContainer from "../components/cityForecastContainer";
import SearchLocationContainer from "../components/searchLocationContainer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start pt-1 h-full border-t border-solid border-slate-500 dark:border-none relative">
        <SearchLocationContainer />
        <CityForecastContainer />
      </div>
    </>
  );
}
