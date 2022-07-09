import React from 'react'
import {useQuery, useQueryClient} from 'react-query';
import { mockFetchCityByLocationKey, mockFetchCurrentWeather } from '../utils/mockServerJsonService';
import { fetchCityByLocationKey, TEL_AVIV_LOCATION_KEY } from '../utils/weatherService';

import FiveDayForecast from './fiveDayForecast'
import LocalForecast from './localForecast'


export default function CityForecast() {

  const toggleDegree = ()=>{
    console.log(city)
    if(city){
      city.isCelsius = !city.isCelsius;
    }
  }

  const createCity = (cityData, currentConditionsData)=>{
    if(cityData && currentConditionsData){
      const city = {
        id : cityData.AdministrativeArea.ID,
        cityName : cityData.AdministrativeArea.EnglishName,
        countryName : cityData.Country.EnglishName,
        key : cityData.Key,
        isCelsius : true,
        temperture :{
          celsius : currentConditionsData[0].Temperature.Metric.Value,
          fahrenheit : currentConditionsData[0].Temperature.Imperial.Value,
        },
        weatherIcon : currentConditionsData[0].WeatherIcon,
        weatherText : currentConditionsData[0].WeatherText,
        Link : currentConditionsData[0].Link,
    }
    return city;
    }
  }

  const queryClient = useQueryClient();
  
  let key = TEL_AVIV_LOCATION_KEY;
  // const {data, status} = useQuery(["cities", key], fetchCityByLocationKey)
  
  const useCityQuery = ()=>{
    const {data, status} = useQuery(["cities", key], mockFetchCityByLocationKey)
    return {data, status};
  }
  const {data : cityData,status : cityStatus } = useCityQuery();

  console.log(cityStatus)
  console.log(cityData)

 
  const useCurrentConditionQuery = ()=>{
    const {data, status} = useQuery(["weather", key], mockFetchCurrentWeather)
    return {data, status};
  }    
  const {data: currentConditionsData,status: currentConditionsStatus} = useCurrentConditionQuery()
  console.log(currentConditionsData)
  console.log(currentConditionsStatus)

  const city = createCity(cityData, currentConditionsData);
  console.log(city)
  
  // const {data, status} = useQuery(["weather", city.key], fetchCurrentConditions)
  const GetCityForest = ()=>{
    return(
      <>
       
      </>
    )
  }
  return (
    <>
        <div className='bg-slate-50 w-3/4 mx-2 lg:w-1/4 md:w-1/3 sm:w-1/2  dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid border-cyan-600 rounded-xl'>
           {
            city ?
            <>
              <LocalForecast city={city} toggleDegree={toggleDegree}/>
              <FiveDayForecast city={city}/>
            </>
            :null
           }
        </div>
    </>
  )
}
