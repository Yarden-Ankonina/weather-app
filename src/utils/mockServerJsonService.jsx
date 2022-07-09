import {useQuery, useQueryClient} from 'react-query'

const API_ENUM = {
    FiveDailyForcast : "5-daily-forecasts",
    CurrentWeather : "current-weather",
    AutoComplete : "autocomplete-search",
    GeoPosition : "geo-position",
}
const API = "http://localhost:3001/"

export const fetchDailyForecastsMock = async()=>{
    const res = await fetch(API+API_ENUM.FiveDailyForcast);
    const data = await res.json();
    console.log(data)
}

export const fetchCurrentWeather = async ()=>{
    const res = await fetch(API+API_ENUM.CurrentWeather)
    const data = await res.json();
    console.log(data);
}

export const fetchAutoCompleteSearch = async ()=>{
    const res = await fetch(API+API_ENUM.AutoComplete)
    const data = await res.json();
    console.log(data);
}

export const useGeoPosition = ()=>{    
     const fetchGeoPosition = async ()=>{
        const res = await fetch(API+API_ENUM.GeoPosition)
        return res.json()
    }
    const {data, status} = useQuery('position', fetchGeoPosition);
    console.log(data)
}

// json-server --watch db.json --port 3001

