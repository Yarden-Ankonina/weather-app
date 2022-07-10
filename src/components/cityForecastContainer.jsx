// import React from 'react'
// import { useGeoPosition } from '../utils/mockServerJsonService'

// import CityForecast from './cityForecast'
// import SearchLocationContainer from './searchLocationContainer'

// import { useQueryClient} from 'react-query';
// import { useCityQuery } from '../hooks/useCityQuery';
// import { useCurrentConditionQuery } from '../hooks/useCurrentConditionQuery';
// import { useTemperature } from '../hooks/useTemperature';
// import { mockFetchCityByLocationKey, mockFetchCurrentWeather } from '../utils/mockServerJsonService';
// import { fetchCityByLocationKey, TEL_AVIV_LOCATION_KEY } from '../utils/weatherService';
// export default function CityForecastContainer() {
  
//   const {isCelsius,toggleTemperatureScale} = useTemperature();

//   const createCity = (cityData, currentConditionsData)=>{
//     if(cityData && currentConditionsData){
//       const city = {
//         id : cityData.AdministrativeArea.ID,
//         cityName : cityData.AdministrativeArea.EnglishName,
//         countryName : cityData.Country.EnglishName,
//         key : cityData.Key,
//         isCelsius : isCelsius,
//         temperture :{
//           celsius : currentConditionsData[0].Temperature.Metric.Value,
//           fahrenheit : currentConditionsData[0].Temperature.Imperial.Value,
//         },
//         weatherIcon : currentConditionsData[0].WeatherIcon,
//         weatherText : currentConditionsData[0].WeatherText,
//         Link : currentConditionsData[0].Link,
//     }
//     return city;
//     }
//   }

//   const queryClient = useQueryClient();
  
//   let key = TEL_AVIV_LOCATION_KEY;
//   // const {data, status} = useQuery(["cities", key], fetchCityByLocationKey)
  
  
//   const {data : cityData,status : cityStatus } = useCityQuery(key);

//   // console.log(cityStatus)
//   // console.log(cityData)

//   const {data: currentConditionsData,status: currentConditionsStatus} = useCurrentConditionQuery()
//   // console.log(currentConditionsData)
//   // console.log(currentConditionsStatus)

//   const city = createCity(cityData, currentConditionsData);
//   // console.log(city)
  
//   // const {data, status} = useQuery(["weather", city.key], fetchCurrentConditions)
//   const GetCityForest = ()=>{
//     return(
//       <>
       
//       </>
//     )
//   }
//     const toggleHeart = (e)=>{
//     const fullHeart = 9829;
//     const emptyHeart = 9825;
//     const innerHTML = e.target.innerHTML;
//     (innerHTML.codePointAt(0) === fullHeart)? e.target.innerHTML = `&#${emptyHeart};` : e.target.innerHTML =`&#${fullHeart};`;
//   }
  
//   return (
//     <>
//           {
//             city ?
//             <>
//              <SearchLocationContainer/>
//               <button className='text-6xl mb-2 font-light text-red-500' onClick={toggleHeart}>&#9825;</button>
//               <div className='flex w-full justify-center items-start '>
//               <CityForecast city={city} isCelsius={isCelsius} toggleTemperatureScale={toggleTemperatureScale}/>
//               </div>
//             </>
//             :null
//            }
       
//     </>
//   )
// }

import React, {useContext} from 'react'

import FiveDayForecast from './fiveDayForecast';
import LocalForecast from './localForecast';

import { WeatherAppContext } from '../contexts/weatherAppContext';

export default function CityForecastContainer() {
  const {city, status} = useContext(WeatherAppContext);
  return (
    <>
      {status === 'error'?
        <div>Something Went Wrong, Please Try Again Later</div>
        :<></>
      }
      {status === 'loading'?
        <div>...Loading</div>
        :<></>
      }
       {status === 'success'?
        <div className='bg-slate-50 w-3/4 mx-2 lg:w-1/4 md:w-1/3 sm:w-1/2  dark:bg-slate-900/30 bg-opacity-20 dark:border-none border border-solid border-cyan-600 rounded-xl'>
        <LocalForecast city={city} />
        <FiveDayForecast city={city}/>
        </div>
      :<></>
      }
    </>
  )
}


  
