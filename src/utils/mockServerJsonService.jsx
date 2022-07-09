import {useQuery} from 'react-query'
import { TEL_AVIV_LOCATION_KEY } from './weatherService';
import { isEnglishOnly } from './wordUtil';

const API_ENUM = {
    FiveDailyForcast : "5-daily-forecasts",
    CurrentWeather : "currentconditions",
    AutoComplete : "autocomplete-search",
    GeoPosition : "geo-position",
    CityByLocationKey : "search-by-location-key"
}
const API = "http://localhost:3001/"

export const defaultCity = {
    id : "TA",
    cityName : "Tel Aviv",
    countryName : "Israel",
    key : 215835,
    isCelsius : true,
    temperture :{
      celsius : 32.4,
      fahrenheit : 90,
    },
    weatherIcon : 1,
    weatherText : "Sunny",
    Link : "https://www.accuweather.com/en/il/ramat-aviv/215835/current-weather/215835?lang=en-us",
}

export const mockFetchCurrentWeather = async ()=>{
    const res = await fetch(API+API_ENUM.CurrentWeather)
    return res.json();
}

export const mockFetchFiveDayForecast = async()=>{
    const response = await fetch(`${API}${API_ENUM.FiveDailyForcast}`)
    return response.json();
}

export const mockFetchAutoCompleteCities = async ({queryKey})=>{
    const [, query] = queryKey
    let englishOnly = isEnglishOnly(query);
    if(query && query!== "" && englishOnly){
    //   const apiEndPoint = "/locations/v1/cities/autocomplete";
      const response = await fetch(`${API}${API_ENUM.AutoComplete}`);
      return response.json();
    }
}


export const mockFetchCityByLocationKey = async ({queryKey})=>{
    const [, cityKey] = queryKey
    let locationKey = cityKey;
    cityKey ? locationKey = cityKey : locationKey = TEL_AVIV_LOCATION_KEY;
    // console.log(cityKey, locationKey);
    const apiEndPoint = "search-by-location-key";
    const response = await fetch(`${API}${apiEndPoint}`);
    return response.json();
  }



export const useGeoPosition = ()=>{    
     const fetchGeoPosition = async ()=>{
        const res = await fetch(API+API_ENUM.GeoPosition)
        return res.json()
    }
    const {data, status} = useQuery('position', fetchGeoPosition);
    // console.log(data)
}

// json-server --watch db.json --port 3001

