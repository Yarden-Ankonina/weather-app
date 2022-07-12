import React, { createContext, useEffect, useState } from 'react'
import {useQuery} from 'react-query'

import { DEFAULT_LOCATION_KEY } from '../utils/settings';
import { getCityForecast } from '../utils/getCityForecast';
import { storageService } from '../utils/localStorage.service';


export const WeatherAppContext = createContext();


export default function WeatherAppProvider({children}) {
  
  const [isCelsius, setIsCelsius] = useState(true);
  const [locationKey, SetLocationKey] = useState(DEFAULT_LOCATION_KEY);
  const [favouriteList, SetFavouriteList] = useState([]);
  const [favourite,SetFavourite] = useState(false);
  const [isFirstRender, SetisFirstRender] = useState(true)
  const { data :city ,status} = useQuery(['city', locationKey], getCityForecast,{
    staleTime: 24 * 60 * 60 * 1000 // 1 DAY CACHING
  })

    useEffect(()=>{
      const res = storageService.loadFromStorage('favourites')
      SetFavouriteList(res)
      console.log(res)
    },[])
  
  useEffect(()=>{
    if(isFirstRender){ SetisFirstRender(false)}
    else{
      storageService.saveToStorage('favourites',favouriteList);
      console.log(favouriteList)
      console.log(favourite)
      if(favouriteList && city){
        if(favouriteList.includes(city.key)){
          SetFavourite(true)
        }
        else{
          SetFavourite(false)
        }
    }
    }
   
  },[favourite,favouriteList,city,locationKey,isFirstRender])

  const favouriteClick = ()=>{
    if(!favouriteList.includes(city.key)){
      SetFavourite(true)
      SetFavouriteList(prevState => [...prevState,city.key])
      return true;
    }
    else{
      const index = favouriteList.indexOf(city.key);
      if(index !== -1){
        favouriteList.splice(index,1)
        SetFavourite(false)
        SetFavouriteList(favouriteList)
        return false;
      }
    }
  }

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
    favouriteClick,
    favouriteList,
    SetFavouriteList,
    favourite,
    SetFavourite
  }

  return (
    <WeatherAppContext.Provider value={value}>
        {children}
    </WeatherAppContext.Provider>
  )
}
