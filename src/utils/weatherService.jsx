import { data } from "autoprefixer";
import { useState } from "react";

import { useQuery, useQueryClient, queryKey } from "react-query";
import { isEnglishOnly } from "./wordUtil";

const API_KEY = "N3XKvtPaWl6ZYCmmeoCXR6PutQk8xBzH";
const API = "http://dataservice.accuweather.com";

// const TEL_AVIV_COORDS = {
//     locationKey : 215835,
//     lat :32.1062555,
//     long : 2034.7975642
// }


function getUserLocation(){
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
            );
    })
}

export function GetPCheck(){
    const city = {
        locationKey : geoPositionSearch.Key,
        cityName: geoPositionSearch.AdministrativeArea.EnglishName,
        country : geoPositionSearch.Country,
    }
    const cityForecast = {
        name : city.cityName,
        country : city.country.EnglishName,
        forecast : currentWeather[0],
    }
    return cityForecast;
}

export async function getUserCity(){
    const fetchGeoPositionSearch = async (lat,long)=>{
        const apiEndPoint = "/locations/v1/cities/geoposition/search";
        const response = await fetch(`${API}${apiEndPoint}?apikey=${API_KEY}&q=${lat}%2C%${long}`);
        return response.json();
    }

    try{
        const pos = await getUserLocation()
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        // const{data, status} = useQuery('locationInfo', fetchGeoPositionSearch(lat,long))

        const city = {
            locationKey : geoPositionSearch.Key,
            cityName: geoPositionSearch.AdministrativeArea.EnglishName,
            country : geoPositionSearch.Country,
        }
        return city;
    }
    catch(error){
        console.log("can't load location" + error)
        return null;
    }
}

export function getCurrentWeather(){
    const fetchCurrentWeather = async ()=>{
        const apiEndPoint = "currentconditions/v1/";
        const userCity = await getUserCity();
        cityForecast.name = userCity.cityName;
        cityForecast.country = userCity.country;
        // const response = await fetch(`${API}${apiEndPoint}${city.locationKey}?apikey=${API_KEY}`)
    }
    // const{data, status} = useQuery('currentWeather' fetchCurrentWeather)
    const forcast = currentWeather[0];
    if(forcast.IsDayTime){
        
    }
    const cityForecast = {
        name : "",
        country : "",
        forecast : currentWeather[0],
    }
    return cityForecast;

}

export default function getFiveDayForecast(){
  const fetchFiveforecast = async ()=> {
    const apiEndPoint = "/daily/5day/";
    const city = await getUserCity();
    const response = await fetch(`${API}${apiEndPoint}${city.locationKey}?apikey=${API_KEY}`)
    return response.json();
  }
  // const {data,status} = useQuery("fiveDayForecast", fetchFiveforecast)

  return fiveDaysWeather;
}

export const fetchAutoCompleteCities = async ({queryKey})=>{
  const [_, query] = queryKey
  let englishOnly = isEnglishOnly(query);
  if(query && query!= "" && englishOnly){
    const apiEndPoint = "/locations/v1/cities/autocomplete";
    // const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`);
    const response = await fetch(`http://localhost:3001/autocomplete-search`);
    return response.json();
  }
}

const geoPositionSearch = {
    Version: 1,
    Key: "215835",
    Type: "City",
    Rank: 45,
    LocalizedName: "Ramat Aviv",
    EnglishName: "Ramat Aviv",
    PrimaryPostalCode: "",
    Region: {
      ID: "MEA",
      LocalizedName: "Middle East",
      EnglishName: "Middle East",
    },
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
      EnglishName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
      EnglishName: "Tel Aviv",
      Level: 1,
      LocalizedType: "District",
      EnglishType: "District",
      CountryID: "IL",
    },
    TimeZone: {
      Code: "IDT",
      Name: "Asia/Jerusalem",
      GmtOffset: 3,
      IsDaylightSaving: true,
      NextOffsetChange: "2022-10-29T23:00:00Z",
    },
    GeoPosition: {
      Latitude: 32.108,
      Longitude: 34.797,
      Elevation: {
        Metric: {
          Value: 13,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 42,
          Unit: "ft",
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
    ],
  };
  
  export const currentWeather = [
    {
      "LocalObservationDateTime": "2022-07-07T02:47:00+03:00",
      "EpochTime": 1657151220,
      "WeatherText": "Mostly clear",
      "WeatherIcon": 34,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 24,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 75,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/current-weather/215835?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/current-weather/215835?lang=en-us"
    }
  ]

export const fiveDaysWeather = {
      "Headline": {
      "EffectiveDate": "2022-07-09T08:00:00+03:00",
      "EffectiveEpochDate": 1657342800,
      "Severity": 4,
      "Text": "Pleasant this weekend",
      "Category": "mild",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-07-08T07:00:00+03:00",
        "EpochDate": 1657252800,
        "Temperature": {
          "Minimum": {
            "Value": 72,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=1&lang=en-us"
      },
      {
        "Date": "2022-07-09T07:00:00+03:00",
        "EpochDate": 1657339200,
        "Temperature": {
          "Minimum": {
            "Value": 73,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=2&lang=en-us"
      },
      {
        "Date": "2022-07-10T07:00:00+03:00",
        "EpochDate": 1657425600,
        "Temperature": {
          "Minimum": {
            "Value": 73,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=3&lang=en-us"
      },
      {
        "Date": "2022-07-11T07:00:00+03:00",
        "EpochDate": 1657512000,
        "Temperature": {
          "Minimum": {
            "Value": 72,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=4&lang=en-us"
      },
      {
        "Date": "2022-07-12T07:00:00+03:00",
        "EpochDate": 1657598400,
        "Temperature": {
          "Minimum": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-aviv/215835/daily-weather-forecast/215835?day=5&lang=en-us"
      }
    ]
  }