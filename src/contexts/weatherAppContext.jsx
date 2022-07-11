import React, { createContext, useState } from 'react'
import {useQuery} from 'react-query'

import { DEFAULT_LOCATION_KEY } from '../utils/settings';
import { getCityForecast } from '../utils/getCityForecast';


export const WeatherAppContext = createContext();

export default function WeatherAppProvider({children}) {
  
  const [isCelsius, setIsCelsius] = useState(true);
  const [locationKey, SetLocationKey] = useState(DEFAULT_LOCATION_KEY);
  const [favourites, SetFavourites] = useState({});
  const {data :city ,status} = useQuery(['city', locationKey],getCityForecast);

  const toggleWeatherAppScale = ()=>{
    isCelsius ? setIsCelsius(false) : setIsCelsius(true)
  }
  const value ={
    toggleWeatherAppScale,
    isCelsius,
    setIsCelsius,
    locationKey,
    SetLocationKey,
    city,
    status,
    favourites,
    SetFavourites
  }

  return (
    <WeatherAppContext.Provider value={value}>
        {children}
    </WeatherAppContext.Provider>
  )
}
