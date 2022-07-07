import { data } from "autoprefixer";
import { useQuery } from "react-query";

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

export async function getCurrentWeather(){
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