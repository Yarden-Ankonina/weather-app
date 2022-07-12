import fetchApi from "./fetchApi";
import { isDevMode } from "./settings";

const getCityForecastAdapter = (locationData,currentConditions,fiveDayForecastData)=>{
    if(!locationData || !currentConditions || !fiveDayForecastData) return null;
    const city = {
        id : locationData.AdministrativeArea.ID,
        cityName : locationData.LocalizedName,
        cityArea : locationData.AdministrativeArea.EnglishName,
        countryName : locationData.Country.EnglishName,
        key : locationData.Key,
        isCelsius : true,
        isFavourite : false,
        temperture :{
            celsius : currentConditions[0].Temperature.Metric.Value,
            fahrenheit : currentConditions[0].Temperature.Imperial.Value,
        },
        weatherIcon : currentConditions[0].WeatherIcon,
        weatherText : currentConditions[0].WeatherText,
        link : currentConditions[0].Link,
        fiveDayForecast : fiveDayForecastData.DailyForecasts,
    }
    return city;
}

export const getCityForecast = async ({queryKey}) => {
    const [,locationKey] = queryKey
    if(!locationKey) return;
    const baseUrl =
    isDevMode
      ? "http://localhost:3001"
      : "https://dataservice.accuweather.com";
    const endPoints = {
        locationRequest : `${baseUrl}/locations/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        currentConditions : `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
        fiveDayForecast : `${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}`,
    }
        const location = await fetchApi(endPoints.locationRequest);
        const currentConditions = await fetchApi(endPoints.currentConditions);
        const fiveDayForecast = await fetchApi(endPoints.fiveDayForecast);
      
        return getCityForecastAdapter(location, currentConditions, fiveDayForecast)
};

  