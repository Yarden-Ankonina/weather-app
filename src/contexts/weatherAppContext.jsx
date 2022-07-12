import React, { createContext, useEffect, useState } from 'react'
import {useQuery} from 'react-query'

import { DEFAULT_LOCATION_KEY } from '../utils/settings';
import { getCityForecast } from '../utils/getCityForecast';
import { storageService } from '../utils/localStorage.service';
import { notify } from '../utils/customToast';

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
    if(res){
      SetFavouriteList(res)
    }
  },[])
  
  useEffect(()=>{
    if(!isFirstRender){
      switch(status){
        case "loading":
          notify("Loading...","info")
          break;
        case "error":
          notify("Couldn't fetch weather","error")
          break;
        case "success":
          notify("success","success")
          break;
        default:
          break;
        }
    }
  },[status, isFirstRender])

    
  
  useEffect(()=>{
    if(isFirstRender){ SetisFirstRender(false)}
    else{
      storageService.saveToStorage('favourites',favouriteList);
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

  const showForeCastOnHomePage = (locationKey) =>{
    SetLocationKey(locationKey);
  }

  const favouriteClick = ()=>{
    if(!favouriteList.includes(city.key)){
      SetFavourite(true)
      SetFavouriteList(prevState => [...prevState,city.key])
    }
    else{
      const index = favouriteList.indexOf(city.key);
      if(index !== -1){
        favouriteList.splice(index,1)
        SetFavourite(false)
        SetFavouriteList(favouriteList)
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
    SetFavourite,
    showForeCastOnHomePage
  }

  return (
    <WeatherAppContext.Provider value={value}>
        {children}
    </WeatherAppContext.Provider>
  )
}
