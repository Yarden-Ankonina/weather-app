// import { data } from "autoprefixer";
// import { useState } from "react";

// import { useQuery, useQueryClient, queryKey } from "react-query";
// import { isEnglishOnly } from "./wordUtil";

// const API_KEY = "N3XKvtPaWl6ZYCmmeoCXR6PutQk8xBzH";
// const API = "http://dataservice.accuweather.com";
// export const TEL_AVIV_LOCATION_KEY = 215854;


// function getUserLocation(){
//     return new Promise((resolve, reject)=>{
//         navigator.geolocation.getCurrentPosition(
//             position => resolve(position),
//             error => reject(error)
//             );
//     })
// }

// export function GetPCheck(){
//     const city = {
//         locationKey : geoPositionSearch.Key,
//         cityName: geoPositionSearch.AdministrativeArea.EnglishName,
//         country : geoPositionSearch.Country,
//     }
//     const cityForecast = {
//         name : city.cityName,
//         country : city.country.EnglishName,
//         forecast : currentWeather[0],
//     }
//     return cityForecast;
// }

// export async function getUserCity(){
//     const fetchGeoPositionSearch = async (lat,long)=>{
//         const apiEndPoint = "/locations/v1/cities/geoposition/search";
//         const response = await fetch(`${API}${apiEndPoint}?apikey=${API_KEY}&q=${lat}%2C%${long}`);
//         return response.json();
//     }

//     try{
//         const pos = await getUserLocation()
//         const lat = pos.coords.latitude;
//         const long = pos.coords.longitude;
//         // const{data, status} = useQuery('locationInfo', fetchGeoPositionSearch(lat,long))

//         const city = {
//             locationKey : geoPositionSearch.Key,
//             cityName: geoPositionSearch.AdministrativeArea.EnglishName,
//             country : geoPositionSearch.Country,
//         }
//         return city;
//     }
//     catch(error){
//         console.log("can't load location" + error)
//         return null;
//     }
// }

// export function getCurrentWeather(){
//     const fetchCurrentWeather = async ()=>{
//         const apiEndPoint = "currentconditions/v1/";
//         const userCity = await getUserCity();
//         cityForecast.name = userCity.cityName;
//         cityForecast.country = userCity.country;
//         // const response = await fetch(`${API}${apiEndPoint}${city.locationKey}?apikey=${API_KEY}`)
//     }
//     // const{data, status} = useQuery('currentWeather' fetchCurrentWeather)
//     const forcast = currentWeather[0];
//     if(forcast.IsDayTime){
        
//     }
//     const cityForecast = {
//         name : "",
//         country : "",
//         forecast : currentWeather[0],
//     }
//     return cityForecast;

// }

// export default function getFiveDayForecast(){
//   const fetchFiveforecast = async ()=> {
//     const apiEndPoint = "/daily/5day/";
//     const city = await getUserCity();
//     const response = await fetch(`${API}${apiEndPoint}${city.locationKey}?apikey=${API_KEY}`)
//     return response.json();
//   }
//   // const {data,status} = useQuery("fiveDayForecast", fetchFiveforecast)

//   return fiveDaysWeather;
// }

// export const fetchAutoCompleteCities = async ({queryKey})=>{
//   const [_, query] = queryKey
//   let englishOnly = isEnglishOnly(query);
//   if(query && query!== "" && englishOnly){
//     const apiEndPoint = "/locations/v1/cities/autocomplete";
//     const response = await fetch(`${API}${apiEndPoint}?apikey=${API_KEY}&q=${query}`);
//     // const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`);
//     return response.json();
//   }
// }

// export const fetchCurrentConditions = async ({queryKey})=>{
//     const [_, cityKey] = queryKey
//     let locationKey = cityKey;
//     cityKey ? locationKey = cityKey : locationKey = TEL_AVIV_LOCATION_KEY;
//     const apiEndPoint = "/currentconditions/v1/";
//     // const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/215835?apikey=N3XKvtPaWl6ZYCmmeoCXR6PutQk8xBzH`);
//     const response = await fetch(`${API}${apiEndPoint}${TEL_AVIV_LOCATION_KEY}?apikey=${API_KEY}`);
//     return response.json();
//   }

  

// export const fetchCityByLocationKey = async ({queryKey})=>{
//   const [_, cityKey] = queryKey
//   let locationKey = cityKey;
//   cityKey ? locationKey = cityKey : locationKey = TEL_AVIV_LOCATION_KEY;
//   const apiEndPoint = "/locations/v1/";
//   const response = await fetch(`${API}${apiEndPoint}${TEL_AVIV_LOCATION_KEY}?apikey=${API_KEY}`);
//   return response.json();
// }
